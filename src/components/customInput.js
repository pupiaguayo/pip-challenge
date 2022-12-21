import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  width: 24%;
  gap: 10px;
  @media screen and (max-width: 725px) {
    width: 80%;
  }
  span {
    font-weight: bold;
  }
`;
const Input = styled.input`
  font-size: 18px;
  height: 40px;
  width: 98%;
  background: transparent;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;
const preventNegativeValues = (e) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
export const CustomInput = ({ onChange }) => {
  return (
    <Container>
      <span>Amount:</span>
      <Input
        type="number"
        min={0}
        defaultValue={1}
        onChange={onChange}
        onKeyDown={preventNegativeValues}
      />
    </Container>
  );
};
