import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const SmallDiv = styled.div`
  width: 63px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: black;
  margin-bottom: 40px;
`;
export const Error = styled.div`
  height: 20px;
  display: flex;
  color: red;
  margin-bottom: 10px;
`;
export const LoginBox = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: auto;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
  color: skyblue;
  font-size: 17px;
  font-weight: 700;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginInput = styled.input`
  width: 450px;
  height: 50px;
  margin-left: 10px;
  border: 1px solid black;
  background-color: #EAEAEA;
  color: black;
  border: none;

  ::placeholder {
    color: black;
    font-weight: 100;
    padding-left: 20px;
  }
`;

export const LoginBtn = styled.button`
  width: 150px;
  height: 35px;
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 10px skyblue;
  background-color: white;
  color: skyblue;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;

  :hover {
    background-color: #afc0e4;
    border-color: #afc0e4;
    color: black;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;
export const NomalBtn = styled.button`
  width: 250px;
  background-color: yellow;
  border: none;
  color: black;
  font-weight: 700;
  padding: 10px;
  margin: 0px 10px;

  cursor: pointer;
  :hover {
    border: 2px solid black;
  }
`;
