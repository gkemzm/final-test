import { useState } from "react";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POINT, FETCH_USER_LOGGED_IN } from "./payMent.query";
import * as S from "./payMent.styles";
import TestBtn from "../../commons/buttons/testBtn/index";
import { Modal } from "antd";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment() {
  const [amount, setAmount] = useState(100);
  const [productName, setProductName] = useState("point");
  const [createPoint] = useMutation(CREATE_POINT);
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  const Pay500 = () => {
    setAmount(500);
    setProductName("500Point");
  };
  const Pay1000 = () => {
    setAmount(1000);
    setProductName("1000Point");
  };
  const Pay2000 = () => {
    setAmount(2000);
    setProductName("2000");
  };
  const Pay5000 = () => {
    setAmount(5000);
    setProductName("5000Point");
  };
  const Pay10000 = () => {
    setAmount(5000);
    setProductName("10000Point");
  };

  const requestPay = () => {
    // IMP.request_pay(param, callback) 결제창 호출
    console.log(data);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000
    // imp49910675

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: productName,
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // 결제 후 이동할 주소
        m_redirect_url: "http://localhost:3000/market",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          try {
            const result = await createPoint({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            refetch();
            console.log(result);
            alert("Payment Success");
            router.push("/market");
            Modal.destroyAll();
          } catch (error) {
            alert("Payment fail");
          }
        } else {
          alert("Payment fail");
          Modal.destroyAll();
        }
      }
    );
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Wrapper>
        <S.ListBox>
          <S.Title>충전하실 금액을 입력해주세요</S.Title>
          <S.BasicColumn>
            <S.BasicRow>
              <S.PriceInput onClick={Pay500} type="checkbox"></S.PriceInput>500
              포인트
            </S.BasicRow>
            <S.BasicRow>
              <S.PriceInput onClick={Pay1000} type="checkbox"></S.PriceInput>
              1000 포인트
            </S.BasicRow>
            <S.BasicRow>
              <S.PriceInput onClick={Pay2000} type="checkbox"></S.PriceInput>
              2000 포인트
            </S.BasicRow>
            <S.BasicRow>
              <S.PriceInput onClick={Pay5000} type="checkbox"></S.PriceInput>
              5000 포인트
            </S.BasicRow>
            <S.BasicRow>
              <S.PriceInput onClick={Pay10000} type="checkbox"></S.PriceInput>
              10000 포인트
            </S.BasicRow>
          </S.BasicColumn>
          <S.Area>선택된 포인트: {productName}</S.Area>
          <S.Area onClick={requestPay}>
            <TestBtn isActive={true} title={"결제하기"} />
          </S.Area>
        </S.ListBox>
      </S.Wrapper>
    </>
  );
}
