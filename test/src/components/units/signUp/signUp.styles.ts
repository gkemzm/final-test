import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
`;

export const SmallDiv = styled.div`
  width: 200px;
  display: flex;
  justify-content: end;
  color: black;
`;
export const BottomDiv = styled.div`
  display: flex;
  color: black;
`;

export const BottomDiv2 = styled.div`
  margin-left: 30px;
  display: flex;
  color: black;
  font-weight: 700;
  cursor: pointer;
`;

export const NormalRow =styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid #bebebe;
  padding: 0px 30px;
  margin-bottom: 20px;
` 
export const Row2 =styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
` 
export const MainTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-right: 20px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const Error = styled.div`
  height: 20px;
  display: flex;
  color: red;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  width: 250px;
  background-color: black;
  border: none;
  color: white;
  font-weight: 700;
  padding: 10px;

  cursor: pointer;
  :hover {
    border: 2px solid white;
  }
`;
export const SignUpBox = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
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
  margin-right: 70px;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginInput = styled.input`
  width: 580px;
  height: 40px;
  margin-left: 10px;
  background-color: #EAEAEA;
  border: none;
  color: black;

  ::placeholder {
    font-weight: 700;
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
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    background-color: #afc0e4;
    border-color: #afc0e4;
    color: black;
  }
`;

