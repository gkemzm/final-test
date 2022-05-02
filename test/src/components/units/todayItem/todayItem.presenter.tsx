import * as S from "./todayItem.styles";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

interface IrecentlyWatchProps {
  todayWatchList: any;
  onClickDeleteList: any;
}
export default function TodayItemsHTML(props: IrecentlyWatchProps) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      {props.todayWatchList?.map((el: any) => (
        <S.MyRow key={el._id}>
          <S.MyColumn>
            <S.ListBox>
              <S.DeleteBtn onClick={props.onClickDeleteList(el)}>
                ❌
              </S.DeleteBtn>

              {el.images[0] ? (
                <S.Img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  onClick={onClickMoveToPage(`/market/${el._id}`)}
                ></S.Img>
              ) : (
                <S.Img
                  src="/NoImage2.png"
                  onClick={onClickMoveToPage(`/market/${el._id}`)}
                ></S.Img>
              )}
              <S.Title>{el.name}</S.Title>
            </S.ListBox>
          </S.MyColumn>
        </S.MyRow>
      ))}
    </S.Wrapper>
  );
}
