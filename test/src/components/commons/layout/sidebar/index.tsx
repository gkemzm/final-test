import styled from "@emotion/styled";
import TodayItems from "../../../units/todayItem/todayItem.container";

const Wrapper = styled.div`
  width: 150px;
  margin: 70px 60px 10px 0px;
  background-color: white;
  /* border: none;
  border-radius: 15px;
  box-shadow: 0px 2px 15px #e5e5e5; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LayouySidebar() {
  return (
    <>
      <Wrapper>
        <TodayItems />
      </Wrapper>
    </>
  );
}
