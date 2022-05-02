import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const BasicRow2 = styled.div`
  width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background-color: black;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-weight: 700px;
  margin-bottom: 10px;
`;
export const Img = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Bucket = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 20px;
  background-color: beige;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
export const Contents = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const Tags = styled.div`
  font-size: 15px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;

export const Tag = styled.div`
  font-size: 15px;
  font-weight: 700;
  background-color: black;
  color: white;
  margin-right: 10px;
  border-radius: 20px;
  padding: 0px 20px;
`;
