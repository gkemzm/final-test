import * as S from "./pickList.styles";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import DOMPurify from "dompurify";

export default function PickedListHTML(props: any) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TextDiv>찜목록</S.TextDiv>
      {props.data?.fetchUseditemsIPicked?.map((el: any) => (
        <S.BasicRow key={el._id}>
          <S.Bucket>
            <S.Img
              src={`https://storage.googleapis.com/${el.images[0]}`}
              onClick={onClickMoveToPage(`/market/${el._id}`)}
            ></S.Img>
            <S.BasicColumn>
              <S.BasicRow2>
                <S.Name>{el.name}</S.Name>
                {/* <S.DelBtn>삭제하기</S.DelBtn> */}
              </S.BasicRow2>
              <S.Contents>{el.remarks}</S.Contents>
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(`${el.contents}`),
                }}
              ></S.Contents>
              <S.Tags>
                {el.tags.map((el: any) => (
                  <S.BasicRow key={uuidv4()}>
                    <S.Tag>{el}</S.Tag>
                  </S.BasicRow>
                ))}
              </S.Tags>
            </S.BasicColumn>
          </S.Bucket>
        </S.BasicRow>
      ))}
    </S.Wrapper>
  );
}
