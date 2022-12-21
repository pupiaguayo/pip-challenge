import styled from "styled-components";

export const ChangeCurrenciesContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 30vh;
  margin: 0 auto;
  width: 80vw;
  height: 402px;
  background-color: #ffffff;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 725px) {
      flex-direction: column;
  }
`;
