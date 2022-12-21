import styled from "styled-components";

export const LastUpdatedContainer = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  position: relative;
  bottom: 0;
  left: 20vw;
  color: #000000;
  span{
text-decoration: underline;
  }
  @media screen and (max-width: 725px) {
    margin: auto;
    position: absolute;
    top: 75vh;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
`;
