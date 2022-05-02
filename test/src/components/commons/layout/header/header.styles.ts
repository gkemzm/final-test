import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1300px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  margin: auto;
`;
export const LoginBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-right: 30px;
  border: none;
  cursor: pointer;
`;

export const SignBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-right: 30px;
  border: none;
  cursor: pointer;
`;

export const HomeBtn = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-right: 10px;
  border: none;
  cursor: pointer;

  :hover {
    font-weight: 700;
  }
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: white;
`;

export const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 700;
`;
