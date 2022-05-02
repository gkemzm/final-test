import * as S from "./signUp.styles";
import { IChangeSignUp } from "./signUp.types";
import TestBtn from '../../commons/buttons/testBtn/index';
import { useRouter } from 'next/router';

export default function SignUpPresenter(props: IChangeSignUp) {
  const router = useRouter()

  const moveBack = () =>{
    router.back()
  }

  const moveLogin = () =>{
    router.push("/Login")
  }
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
        <S.SignUpBox>
          <S.NormalRow>
            <S.MainTitle>회원가입</S.MainTitle>
            <S.Title>Sign-up</S.Title>
          </S.NormalRow>
          <S.BasicRow>
            <S.SmallDiv>아이디(E-Mail)</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("email")}
              // onChange={props.onChangeEmail}
              placeholder={"이메일 아이디를 @까지 정확하게 입력하세요"}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>비밀번호</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("password")}
              // onChange={props.onChangePw}
              placeholder={" 영문+숫자 조합 8~16자리를 입력해주세요."}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>비밀번호 확인</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("passwordCheck")}
              // onChange={props.onChangePwCheck}
              placeholder={" 영문+숫자 조합 8~16자리를 입력해주세요. "}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
          <S.BasicRow>
            <S.SmallDiv>이름</S.SmallDiv>{" "}
            <S.LoginInput
              {...props.register("name")}
              // onChange={props.onChangeId}
              placeholder={" Ex) 홍길동"}
            ></S.LoginInput>
          </S.BasicRow>
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <S.Row2>
            <TestBtn isActive={props.formState.isValid} title={"Sign-Up"} />
            <S.Btn onClick={moveBack}>취소하기</S.Btn>
          </S.Row2>
          <S.Row2>
            <S.BottomDiv>이미 아이디가 있으신가요?</S.BottomDiv>
            <S.BottomDiv2 onClick={moveLogin}>로그인</S.BottomDiv2>
          </S.Row2>
        </S.SignUpBox>
      </form>
    </S.Wrapper>
  );
}
