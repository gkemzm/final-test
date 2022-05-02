// import { useRouter } from 'next/router';
// import styled from '@emotion/styled';
import MarketMainPage from "./market/index";

// const  Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

export default function Home() {
  // const router = useRouter()

  // const moveMarket = () =>{
  //   router.push("/market")
  // }
  return (
    // <Wrapper>
    //   <img src="codecamp.png" onClick={moveMarket}></img><br />
    //   <h3 onClick={moveMarket}>클릭시 마켓이동</h3>
    // </Wrapper>
    <MarketMainPage />
  );
}
