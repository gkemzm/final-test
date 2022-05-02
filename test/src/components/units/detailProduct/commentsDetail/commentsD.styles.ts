import styled from "@emotion/styled";
import { IHoverAnswer } from "./commentsD.types";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 20px 0px;
  margin: 30px 0px;
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  width: 80%;
  justify-content: space-between;
`;

export const TextArea = styled.div`
  width: 350px;
  height: 250px;
  max-height: 400px;
  margin-left: 100px;
  margin-top: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  display: flex;
  font-size: 17px;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 10px;
  color: black;
  padding-left: 15px;
`;

export const AnswerBox = styled.div`
  width: 350px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const Name = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 10px;
  color: purple;
`;

export const MiniBtn = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  cursor: pointer;
`;
export const Date = styled.div`
  display: flex;
  color: purple;
  font-size: 14px;
  font-weight: 700;
`;

export const BtnListRow = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Area = styled.div``;

export const Btn = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  border: none;
  background-color: yellow;
  font-weight: 700;
  padding: 3px 10px;
  :hover {
    border: 2px solid black;
  }
`;

export const HiddenArea = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props: IHoverAnswer) => (props.isHover ? "flex" : "none")};
`;
