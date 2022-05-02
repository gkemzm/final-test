import * as S from "./header.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useQuery, useMutation } from "@apollo/client";
import { accessTokenState, TodayItemList } from "../../store/index";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import Payment from "../../../units/payMent/payMent.container";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const logoutUserName = async () => {
    try {
      await logoutUser({});
      location.reload();
      router.push("/market");
    } catch (error) {
      alert("logoutFailed");
    }
  };

  const [bucketItem, setBucketItems] = useState([]);
  const [deleteList] = useRecoilState(TodayItemList);

  useEffect(() => {
    const bucket = JSON.parse(localStorage.getItem("bucket") || "[]");
    setBucketItems(bucket);
  }, [deleteList]);

  const aaa = bucketItem.length;

  return (
    <>
      <S.Wrapper>
        <S.BasicRow>
          <div></div>
        </S.BasicRow>
        <S.BasicRow>
          {!accessToken ? (
            <>
              <S.LoginBtn onClick={onClickMoveToPage("/Login")}>
                로그인
              </S.LoginBtn>
              <S.SignBtn onClick={onClickMoveToPage("/signUp")}>
                회원가입
              </S.SignBtn>
            </>
          ) : (
            <>
              <S.ProfileArea>{data?.fetchUserLoggedIn.name}님 /</S.ProfileArea>
              <S.ProfileArea>
                포인트: {data?.fetchUserLoggedIn.userPoint.amount}
              </S.ProfileArea>
              {isOpen && (
                <Modal
                  title="충전하기"
                  visible={true}
                  onOk={onToggleModal}
                  onCancel={onToggleModal}
                >
                  <Payment />
                </Modal>
              )}
              {/* <S.HomeBtn onClick={onClickMoveToPage("/payment")}>
                충전하기
              </S.HomeBtn> */}
              <S.HomeBtn onClick={onToggleModal}>충전하기</S.HomeBtn>
              <S.HomeBtn onClick={logoutUserName}>로그아웃</S.HomeBtn>
              <S.HomeBtn onClick={onClickMoveToPage("/basket")}>
                장바구니({aaa})
              </S.HomeBtn>
            </>
          )}
        </S.BasicRow>
      </S.Wrapper>
    </>
  );
}
