import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  padding-top: 20px;
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextArea = styled.div`
  width: 420px;
  height: 170px;
  max-height: 400px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 20%;
  background-color: yellow;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  :hover {
    border: 2px solid black;
  }
`;
