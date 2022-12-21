import React, { useContext } from "react";
import CurrenciesContext from "../context/currencies/currencies-context";
import { LastUpdatedContainer } from "../styles/lastUpdatedStyles";
export const LastUpdated = () => {
  const { currencyFrom, currencyTo, currenciesRates } =
    useContext(CurrenciesContext);
  let dateUpdate = currenciesRates.date;
  return (
    <LastUpdatedContainer>
      <span>{currencyFrom}</span> to <span>{currencyTo}</span> conversion — Last
      updated {dateUpdate}
    </LastUpdatedContainer>
  );
};
