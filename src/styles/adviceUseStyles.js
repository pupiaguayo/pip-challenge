import styled from "styled-components";

export const AdviceUseContainer = styled.div`
  height: 100px;
  width: 40%;
  margin-top: 30px;
  font-size: 14px;
  background: #e8f3ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  line-height: 36px;
  p{
    font-weight: 400;
  }
  @media screen and (max-width: 725px) {
    display:none;
  }
`;
