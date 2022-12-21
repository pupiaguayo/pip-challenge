import React, { useContext } from "react";
import { MoneyRateContainer, MoneyRateInfo } from "../styles/moneyRateStyle";
import CurrenciesContext from "../context/currencies/currencies-context";
export const MoneyRate = () => {

  const { amount, baseFromRate, currenciesRates, changeRate, currencyFrom, currencyTo  } = useContext(CurrenciesContext);
  
  let arrayRates = currenciesRates?.rates
  let changeAmount = arrayRates?.[changeRate]
  let resultado = amount * changeAmount;

  return (
    <MoneyRateContainer>
      <MoneyRateInfo>
        <p>
          {amount} {currencyFrom} = {resultado} {currencyTo}
        </p>
        <span>1 {baseFromRate} = {changeAmount} {changeRate}</span>
      </MoneyRateInfo>
    </MoneyRateContainer>
  );
};
