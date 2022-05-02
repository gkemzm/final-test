import styled from "@emotion/styled";

interface Iprops {
  isActive: boolean;
}
interface IButtonProps {
  isActive: boolean;
  title: string;
}
const Button = styled.button`
  width: 200px;
  background-color: ${(props: Iprops) =>
    props.isActive ? "yellow" : "#BEBEBE"};
  border: none;
  color: black;
  font-weight: 700;
  padding: 10px;

  cursor: pointer;
  :hover {
    border: 2px solid black;
  }
`;

export default function TestBtn(props: IButtonProps) {
  return (
    <>
      <Button isActive={props.isActive}>{props.title}</Button>
    </>
  );
}
