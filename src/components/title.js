import React, { useContext } from "react";
import { TitleContainer } from "../styles/titleHomeStyles";
import CurrenciesContext from "../context/currencies/currencies-context";
export const TitleHome = () => {
  const { amount } =
  useContext(CurrenciesContext);
  return (
    <TitleContainer>
      <h2>{amount} EUR to USD - Convert Euros to US Dollars</h2>
    </TitleContainer>
  );
};
