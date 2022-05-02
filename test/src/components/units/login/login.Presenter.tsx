import { ILoginEvent } from "./login.types";
import * as S from "./login.styles";
import TestBtn from '../../commons/buttons/testBtn/index';

export default function LoginPresenter(props: ILoginEvent) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.LoginBox>
          <S.Title>로그인</S.Title>
          <S.BasicRow>
            <S.LoginInput
              {...props.register("email")}
              // onChange={props.onChangeId}
              placeholder={" 아이디"}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.BasicRow>
            <S.LoginInput
              {...props.register("password")}
              // onChange={props.onChangePw}
              placeholder={" 비밀번호 "}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          {/* <S.LoginBtn isActive={props.formState.isValid}>LOGIN</S.LoginBtn> */}
          <TestBtn isActive={props.formState.isValid} title={"로그인"} />
        </S.LoginBox>
      </form>
      <S.BottomWrapper>
        <S.NomalBtn>비밀번호 찾기</S.NomalBtn>
        <S.NomalBtn onClick={props.MoveSignUp}>회원가입</S.NomalBtn>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
