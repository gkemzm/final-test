import styled from "@emotion/styled";
import { IHoverPosition } from "./listProduct.type";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #bebebe;
  border: none;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BasicRow2 = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const BestBoard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Area = styled.div`
  width: 150px;
  margin-right: 20px;
`;

export const Area2 = styled.div`
  margin-bottom: 30px;
  display: ${(props: IHoverPosition) => (props.isHover ? "flex" : "none")};
`;

export const BestBoardList = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const ProductBox = styled.div`
  height: 320px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  margin-top: 30px;
  margin-left: 30px;
  justify-content: space-between;
  cursor: pointer;
`;

export const ImageBox = styled.img`
  width: 247px;
  height: 248px;
  object-fit: cover;
`;

export const ProductDetail = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 23px;
  font-weight: 700;
`;

export const ProductRemarks = styled.div`
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 1px 5px;
  border: none;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductTags = styled.div`
  font-size: 16px;
  color: gray;
`;
export const Name = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
`;
export const CreatedAt = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  margin-top: 3px;
`;
