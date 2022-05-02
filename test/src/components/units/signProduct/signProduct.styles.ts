import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  border: 2px solid black;
`;

export const Error = styled.div`
  margin: 5px 0px 0px 300px;
  font-size: 15px;
  font-weight: 700;
  color: red;
`;

export const Title = styled.div`
  width: 1200px;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  padding: 60px 0px 20px 0px;
  color: black;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 83%;
  border-bottom: 1px solid black;
  margin-left: 100px;
  margin-bottom: 20px;
`
export const NormalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 83%;
  margin-left: 100px;
`
export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  font-size: 18px;
  font-weight: 700;
  margin: 0px auto 0px auto;
  color: black;
`;

export const SubTitle2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-left: 100px;
  margin-top: 30px;
`;

export const TagList = styled.div`
  width: 90%;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  margin: 30px auto 0px auto;
  color: skyblue;
  overflow: scroll;
  height: 100px;

  ::-webkit-scrollbar{width: 0px}
`;

export const TagDel = styled.div`
  height: 40px;
  font-size: 5px;
  margin-left: 5px;
  cursor: pointer;
`;

export const Tag = styled.div`
  border: none;
  color: purple;
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: beige;
  height: 40px;
  border: none;
  border-radius: 20px;
  color: purple;
  padding: 5px 15px;
  margin: 10px 10px 0px 10px;
  cursor: pointer;
`;

export const PostBtn = styled.button`
  width: 120px;
  height: 35px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  border: none;
  background-color: black;
  margin-left: 10px;
  cursor: pointer;
`;

export const SubTitleInput = styled.input`
  width: 1000px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: #EAEAEA;
  margin: 10px 00px 0px 95px;

  ::placeholder {
    padding-left: 20px;
    color: gray;
  }
`;

export const TextArea = styled.div`
  width: 1000px;
  height: 400px;
  max-height: 400px;
  margin-left: 100px;
  margin-top: 10px;
`;

export const TradeGpsBox = styled.div`
  width: 400px;
  margin: 30px auto 50px auto;
`;
export const TradeGpsBox2 = styled.div`
  width: 600px;
  margin: 30px auto 50px auto;
`;

export const BasicRow = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
  color: skyblue;
`;

export const AddressInput = styled.input`
  width: 590px;
  height: 35px;
  border: none;
  background-color: #EAEAEA;
  margin: 10px 0px;
  padding-left: 10px;
  color: black;
  ::placeholder {
    color: black;
    padding-left: 10px;
  }
`;

export const ZoneCode = styled.input`
  width: 100px;
  height: 35px;
  border: none;
  background-color: #EAEAEA;
  margin: 10px 0px;
  padding-left: 10px;
  color: black;
  
  ::placeholder {
    color: black;
    padding-left: 10px;
  }
`;

export const MapInput = styled.div`
  width: 180px;
  height: 35px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 15px skyblue;
  background-color: white;
  color: skyblue;
  font-size: 16px;
  font-weight: 700;
  margin: 10px 10px 0px 0px;
  line-height: 35px;
  text-align: center;

  ::placeholder {
    color: skyblue;
  }
`;

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px 10px;
`;

export const Area = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  padding: 30px 0px 50px 0px;
`;
export const SubmitBtn = styled.button`
  width: 150px;
  background-color: skyblue;
  border: none;
  box-shadow: 0px 4px 10px skyblue;
  color: white;
  font-weight: 700;
  border-radius: 20px;
  padding: 10px;

  cursor: pointer;
  :hover {
    background-color: white;
    color: skyblue;
  }
`;
export const ProductImg = styled.img``;
