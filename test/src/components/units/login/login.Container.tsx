import LoginPresenter from "./login.Presenter";
import { useRouter } from "next/router";
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from "./login.query";
import { accessTokenState, userInfoState } from "../../commons/store/index";
import { useRecoilState } from "recoil";
import { useApolloClient, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해 주세요")
    .required("이메일은 필수입니다."),
  password: yup
    .string()
    .matches(
      /^[0-9A-Za-z]{8,20}$/,
      "영문,숫자 조합 8~16자리의 비밀번호를 입력해주세요"
    )
    .required("비밀번호는 필수입니다."),
});
interface ILogin {
  email?: string;
  password?: string;
}

export default function LoginContainer() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: ILogin) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data.loginUser.accessToken;

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });

      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      setAccessToken(accessToken);
      setUserInfo(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      console.log(accessToken);
      alert("로그인에 성공했습니다!.");
      router.push("/");
    } catch (error) {
      alert(error instanceof Error);
    }
  };
  const MoveSignUp = () => {
    router.push("/signUp");
  };

  return (
    <LoginPresenter
      onClickLogin={onClickLogin}
      MoveSignUp={MoveSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
