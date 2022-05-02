import { ICommentHTMLProps } from "./comments.types";
import * as S from "./comments.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommentSignHTML(props: ICommentHTMLProps) {
  return (
    <S.Wrapper>
      <S.TextBox>댓글</S.TextBox>
      <form onSubmit={props.handleSubmit(props.createUseditemComment)}>
        <S.TextArea>
          <ReactQuill
            onChange={props.onChangeContents}
            style={{ height: "100px" }}
          />
        </S.TextArea>
        <S.SubmitBtn>작성하기</S.SubmitBtn>
      </form>
    </S.Wrapper>
  );
}
