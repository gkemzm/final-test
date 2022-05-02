import * as S from "./layoutStyle";
import { useRouter } from "next/router";

export default function LayoutBanner() {
  const router = useRouter();

  const moveMain = () => {
    router.push("/market");
  };
  const MoveSell = () => {
    router.push("/market/new");
  };
  return (
    <>
      <S.Wrapper>
        <S.Img src="/codecamp.PNG" onClick={moveMain}></S.Img>
        <S.BasirRow>
          <S.Img2 src="/sellicon.PNG" onClick={MoveSell}></S.Img2>
          <S.SellBtn onClick={MoveSell}>판매하기</S.SellBtn>
        </S.BasirRow>
      </S.Wrapper>
    </>
  );
}
