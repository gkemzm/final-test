import * as S from "./detailProduct.styles";
import { IProductDetailHTMLProps } from "./detailProduct.types";
import DOMPurify from "dompurify";
import CommentSignContainer from "./comments/comments.container";
import CommentListContainer from "./commentsList/commentsList.container";
import { useRouter } from "next/router";
import KakaoMapPage from "../map/index";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import TestBtn from "../../commons/buttons/testBtn/index";
import { v4 as uuidv4 } from "uuid";
export default function DetailProductHTML(props: IProductDetailHTMLProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  console.log(props.data);
  return (
    <S.BasicColumn>
      <S.BasicColumn>
        <S.Wrapper>
          <S.BasicRow>
            <S.BasicRow>
              {props.data?.fetchUseditem.images[0] ? (
                <S.BasicRow>
                  <S.Imgs
                    src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
                  />
                </S.BasicRow>
              ) : (
                <S.Imgs src="NoImage2.PNG" />
              )}
            </S.BasicRow>
            <S.BasicColumn>
              <S.Row2>
                <S.Title>{props.data?.fetchUseditem.name}</S.Title>
                <div>
                  {props.data?.fetchUseditem?.seller?._id ===
                  props.userData?.fetchUserLoggedIn._id ? (
                    <>
                      <S.MiniIcon
                        src="/edit.png"
                        onClick={onClickMoveToPage(
                          `/market/${router.query.marketId}/edit`
                        )}
                      ></S.MiniIcon>
                      <S.MiniIcon
                        src="/delete.png"
                        onClick={props.deleteUseditemDetailBoard}
                      ></S.MiniIcon>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </S.Row2>
              <S.Price>{props.data?.fetchUseditem.price}:원</S.Price>
              <S.SubTitle>{props.data?.fetchUseditem.remarks}</S.SubTitle>
              <S.Tags>
                {props.data?.fetchUseditem.tags.map((el: any) => (
                  <div key={uuidv4()}>
                    <S.Tag>{el}</S.Tag>
                  </div>
                ))}
              </S.Tags>
              {props.data?.fetchUseditem?.seller?._id !==
              props.userData?.fetchUserLoggedIn._id ? (
                <S.BtnListRow2>
                  <S.Area onClick={props.pickedUseditem}>
                    <S.SellB>
                      찜 : {props.data?.fetchUseditem.pickedCount}
                    </S.SellB>
                  </S.Area>
                  <S.Area onClick={props.buyingProductOnPoint}>
                    <S.SellB>바로구매</S.SellB>
                  </S.Area>
                  <S.Area onClick={props.onClickBasket(props.data)}>
                    <S.SellB>장바구니</S.SellB>
                  </S.Area>
                </S.BtnListRow2>
              ) : (
                <></>
              )}
            </S.BasicColumn>
          </S.BasicRow>
          <S.BasicRow>
            <S.BasicColumn>
              <S.ContentsBox>상품정보</S.ContentsBox>
              {typeof window !== "undefined" ? (
                <S.Contents
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      `${props.data?.fetchUseditem.contents}`
                    ),
                  }}
                ></S.Contents>
              ) : (
                <S.Contents></S.Contents>
              )}

              <S.TextBox>거래지역</S.TextBox>
              <S.BasicRow>
                <S.PostNum>
                  {props.data?.fetchUseditem?.useditemAddress?.zipcode}
                </S.PostNum>
                <S.SubTitle>
                  {props.data?.fetchUseditem?.useditemAddress?.address}
                </S.SubTitle>
              </S.BasicRow>

              {props.data?.fetchUseditem?.useditemAddress?.addressDetail ? (
                <S.SubTitle>
                  {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
                </S.SubTitle>
              ) : (
                <S.SubTitle>
                  {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
                </S.SubTitle>
              )}
              {props.data?.fetchUseditem?.useditemAddress?.address ? (
                <KakaoMapPage
                  address={props.data?.fetchUseditem?.useditemAddress?.address}
                />
              ) : (
                <></>
              )}
            </S.BasicColumn>
            <S.CommentL>
              <S.BasicRow>
                <S.UserImg src="/icon.PNG"></S.UserImg>
                <S.Seller>{props.data?.fetchUseditem.seller.name}</S.Seller>
              </S.BasicRow>
              <CommentSignContainer />
              <CommentListContainer />
            </S.CommentL>
          </S.BasicRow>
        </S.Wrapper>
        <S.BottonWrapper>
          <S.BtnListRow>
            <S.Area onClick={onClickMoveToPage("/market")}>
              <TestBtn isActive={false} title={"메인으로"} />
            </S.Area>
          </S.BtnListRow>
        </S.BottonWrapper>
      </S.BasicColumn>
    </S.BasicColumn>
  );
}
