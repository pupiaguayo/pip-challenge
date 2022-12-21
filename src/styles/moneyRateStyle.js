import styled from "styled-components";

export const MoneyRateContainer = styled.div`
  height: 150px;
  margin-top: 10px;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 725px) {
    width: 100%;
  }
`;

export const MoneyRateInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  p{
    font-size: 24px;
    text-transform: uppercase;
  }
  span {
    line-height: 36px;
    font-weight: 400;
    color: #757575;
  }
  @media screen and (max-width: 725px) {
    margin: auto;
    p{
    font-size: 16px;
    text-transform: uppercase;
  }
  span {
    line-height: 22px;
  }
  }
`;
