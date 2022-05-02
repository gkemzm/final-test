import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px 24px 20px 0px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 120px;
  height: 120px;
  background-color: white;
  color: black;
  margin: 30px 34px 30px 10px;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #BEBEBE;
    color: white;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
