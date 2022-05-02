import { ICommentDetailHTMLProps } from "./commentsD.types";
import * as S from "./commentsD.styles";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { getDate } from "../../../../commons/utils";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommentDetailHTML(props: ICommentDetailHTMLProps) {
  return (
    <S.Wrapper>
      <S.NameBox>
        <S.Name>{props.data.user.name}</S.Name>
        <div>
          <S.MiniBtn
            src="/edit.png"
            onClick={props.onClickBtnUpdateDisplay}
          ></S.MiniBtn>
          <S.MiniBtn
            src="/delete.png"
            onClick={props.deleteUseditemOneQuestion}
          ></S.MiniBtn>
        </div>
      </S.NameBox>
      {props.isHover2 ? (
        <form onSubmit={props.handleSubmit(props.updateUsedItemQuestion)}>
          <S.AnswerBox>
            <ReactQuill
              onChange={props.onChangeContents}
              style={{ height: "100px", width: "350px" }}
              theme="snow"
              defaultValue={props.data?.contents}
            />
            <S.Btn>수정하기</S.Btn>
          </S.AnswerBox>
        </form>
      ) : (
        <S.TextBox
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(`${props.data.contents}`),
          }}
        ></S.TextBox>
      )}
      <S.Date>{getDate(props.data.createdAt)}</S.Date>
      {/* <S.BtnListRow>
        {props.isHover2 ? (
          <S.Area onClick={props.onClickBtnUpdateDisplay}>
            <TestBtn isActive={false} title={"수정취소"} />
          </S.Area>
        ) : (
          <S.Area onClick={props.onClickBtnUpdateDisplay}>
            <TestBtn isActive={false} title={"수정하기"} />
          </S.Area>
        )}

        <S.Area onClick={props.deleteUseditemOneQuestion}>
          <TestBtn isActive={false} title={"삭제하기"} />
        </S.Area>
      </S.BtnListRow> */}
    </S.Wrapper>
  );
}
