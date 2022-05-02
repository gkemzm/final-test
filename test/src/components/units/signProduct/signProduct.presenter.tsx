import * as S from "./signProduct.styles";
import { ISignProductBoardHtmlProps } from "./signProduct.types";
import { v4 as uuidv4 } from "uuid";
import ProductImageSignPage from "../images/imageSign";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMapPage from "../map/index";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from "react";
import TestBtn from "../../commons/buttons/testBtn/index";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function SignProductHTML(props: ISignProductBoardHtmlProps) {
  useEffect(() => {
    props.reset({ contents: props.itemData?.fetchUseditem.contents });
  }, [props.itemData]);

  return (
    <>
      <S.Wrapper>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.updateUsedItem : props.createUsedItem
          )}
        >
          <S.TopWrapper>
            {props.isEdit ? (
              <S.Title>상품 수정</S.Title>
            ) : (
              <S.Title>상품 등록</S.Title>
            )}
          </S.TopWrapper>
          <S.NormalRow>
            <S.SubTitle>상품명</S.SubTitle>
            <S.SubTitleInput
              {...props.register("name")}
              placeholder="상품명을 작성해주세요"
              defaultValue={props.itemData?.fetchUseditem?.name}
            />
          </S.NormalRow>
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <S.NormalRow>
            <S.SubTitle>한줄 요약</S.SubTitle>
            <S.SubTitleInput
              {...props.register("remarks")}
              placeholder="설명을 요약해 입력하세요"
              defaultValue={props.itemData?.fetchUseditem?.remarks}
            />
          </S.NormalRow>
          <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          <S.NormalRow>
            <S.SubTitle>상품 설명</S.SubTitle>
            <S.TextArea>
              <ReactQuill
                onChange={props.onChangeContents}
                style={{ height: "350px" }}
                theme="snow"
                // defaultValue={props.itemData?.fetchUseditem?.contents}
                value={props.getValues("contents") || ""}
              />
            </S.TextArea>
          </S.NormalRow>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
          <S.NormalRow>
            <S.SubTitle>판매 가격</S.SubTitle>
            <S.SubTitleInput
              {...props.register("price")}
              placeholder="판매 가격을 입력하세요"
              defaultValue={props.itemData?.fetchUseditem?.price}
            />
          </S.NormalRow>
          <S.Error>{props.formState.errors.price?.message}</S.Error>
          <S.NormalRow>
            <S.SubTitle>태그 입력(space)</S.SubTitle>
            <S.SubTitleInput
              type="text"
              onKeyUp={props.onKeyUphash}
              placeholder="#태그"
            />
          </S.NormalRow>
          <S.TagList>
            {props.hashArr.map((el: any, index: any) => (
              <S.TagBox key={index}>
                <S.Tag>{el}</S.Tag>
                <S.TagDel id={index} onClick={props.onClikDeleteTags}>
                  ❌
                </S.TagDel>
              </S.TagBox>
            ))}
          </S.TagList>
          <S.SubTitle2>거래 위치</S.SubTitle2>
          <S.BasicRow>
            <S.TradeGpsBox>
              <KakaoMapPage address={props.address} />
            </S.TradeGpsBox>
            <S.TradeGpsBox2>
              {props.isOpen && (
                <Modal
                  title="우편번호검색"
                  visible={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcode onComplete={props.handleComplete} autoClose />
                </Modal>
              )}
              <S.ZoneCode
                readOnly
                placeholder="우편번호"
                defaultValue={props.zipcode}
              />
              <S.PostBtn type="button" onClick={props.onToggleModal}>
                주소 검색
              </S.PostBtn>
              <S.AddressInput
                readOnly
                placeholder="주소"
                defaultValue={props.address}
              />
              <S.AddressInput
                {...props.register("useditemAddress.addressDetail")}
                defaultValue={
                  props.itemData?.fetchUseditem.useditemAddress.addressDetail
                }
                placeholder="상세주소"
              />
            </S.TradeGpsBox2>
          </S.BasicRow>
          <S.SubTitle2>사진 첨부</S.SubTitle2>
          <S.BasicRow>
            {props.productImageUrls.map((el: string, index: number) => (
              <ProductImageSignPage
                key={uuidv4()}
                index={index}
                productImageUrl={el}
                onChangeProductImage={props.onChangeProductImage}
              />
            ))}
          </S.BasicRow>
          {props.isEdit ? (
            <S.Area>
              <TestBtn isActive={props.formState.isValid} title={"수정하기"} />
            </S.Area>
          ) : (
            <S.Area>
              <TestBtn isActive={props.formState.isValid} title={"등록하기"} />
            </S.Area>
          )}
        </form>
      </S.Wrapper>
    </>
  );
}
