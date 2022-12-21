import React, { useContext } from "react";
import { MoneyRateContainer, MoneyRateInfo } from '../styles/moneyRateStyle'
import CurrenciesContext from "../context/currencies/currencies-context";
export const MoneyRate = () => {
  const { amount } =
  useContext(CurrenciesContext);
  return (
    <MoneyRateContainer>
      <MoneyRateInfo>
        <p>{amount} Euro = 1.0627478 US Dollars</p>
        <span>1 USD = 0.941004 EUR</span>
        </MoneyRateInfo>
    </MoneyRateContainer>
  )
}
