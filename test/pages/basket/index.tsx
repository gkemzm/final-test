import { useQuery, gql } from "@apollo/client";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import styled from "@emotion/styled";
import PickedList from "../../src/components/units/pickList/pickList.container";
import BucketList from "../../src/components/units/bucketList/bucketList.container";

const NameWrapper = styled.div`
  font-size: 26px;
  font-weight: 700;
  padding-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <Wrapper>
      <NameWrapper>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</NameWrapper>
      <PickedList />
      <BucketList />
    </Wrapper>
  );
}

export default MyPage;
