import SignUpPresenter from "./signUp.Presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signUp.query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일은 필수 입력사항 입니다!"),
  name: yup
    .string()
    .required("닉네임은 필수 입력사항 입니다!"),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9]/, "영문 숫자 조합 8~16 자리로 입력해주세요")
    .required("비밀번호는 필수 입력사항 입니다!"),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 체크는 필수 입력사항 입니다!"),
});

interface IFormValues {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

export default function SignUpContainer() {
  const router = useRouter();

  const [signUpUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: IFormValues) => {
    try {
      await signUpUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      alert("회원가입에 성공하였습니다!!.");
      router.push("/Login");
    } catch (error) {
      alert("회원가입이 실패했습니다.");
    }
    // }
  };
  return (
    <>
      <SignUpPresenter
        onClickSignUp={onClickSignUp}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
