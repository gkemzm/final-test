import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  justify-content: center;
  align-items: center;
`;
export const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MyColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const Img = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 20px;
`;

export const ListBox = styled.div`
  width: 150px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: purple;
`;

export const DeleteBtn = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 100px;
  padding-bottom: 15px;
  cursor: pointer;
`;
