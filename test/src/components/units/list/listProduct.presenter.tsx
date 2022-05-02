import * as S from "./listProduct.styels";
import { IListProps } from "./listProduct.type";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
import { getDate } from "../../../commons/utils";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

export default function ListBoardHTML(props: IListProps) {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onLoadMore = () => {
    if (!props.data?.fetchUseditems) return; // 데이터가 없으면 요청하지말하라

    props.fetchMore({
      variables: {
        // boaddId: props.data?.fetchBoard._id,
        page: Math.ceil(props.data?.fetchUseditems.length / 10) + 1,
        // boadrId: props.dataComment._id,
        boardId: router.query.boardId,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <>
      <S.Wrapper>
        <div style={{ height: "730px", width: "1410px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            loader={<div className="loader" key={0}></div>}
            useWindow={false}
          >
            <S.BasicRow2>
              {props.data?.fetchUseditems.map((el: any) => (
                <S.ProductBox key={el._id} onClick={props.onClickBasket(el)}>
                  {el.images[0] ? (
                    <S.ImageBox
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onClick={onClickMoveToPage(`/market/${el._id}`)}
                    ></S.ImageBox>
                  ) : (
                    <S.ImageBox
                      src="/NoImage2.PNG"
                      onClick={onClickMoveToPage(`/market/${el._id}`)}
                    ></S.ImageBox>
                  )}
                  <S.BasicColumn
                    onClick={onClickMoveToPage(`/market/${el._id}`)}
                  >
                    <S.Name>{el.seller.name}</S.Name>
                    <S.BasicRow>
                      <S.Price>{el.price}</S.Price>
                      <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                    </S.BasicRow>
                  </S.BasicColumn>
                </S.ProductBox>
              )) || <div></div>}
            </S.BasicRow2>
          </InfiniteScroll>
        </div>
      </S.Wrapper>
    </>
  );
}
