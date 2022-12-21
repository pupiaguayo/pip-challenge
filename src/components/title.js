import React, { useContext } from "react";
import { TitleContainer } from "../styles/titleHomeStyles";
import CurrenciesContext from "../context/currencies/currencies-context";
export const TitleHome = () => {
  const { amount, baseFromRate, changeRate, currencyFrom, currencyTo } =
  useContext(CurrenciesContext);
  return (
    <TitleContainer>
      <h2>{amount} {baseFromRate} to {changeRate} - Convert {currencyFrom} to {currencyTo}</h2>
    </TitleContainer>
  );
};
