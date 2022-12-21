import React, { useEffect, useContext } from "react";
import { ChangeCurrenciesContainer } from "../styles/inputsContainerStyles";
import { CustomInput } from "./customInput";
import { ChangeIcon } from "../utils/icons";
import { MoneyRate } from "./moneyRate";
import { AdviceUse } from "./adviceUse";
import { SelectDropdown } from "./customDropdown";
import CurrenciesContext from "../context/currencies/currencies-context";

export const CurrenciesInputs = () => {
  const { amount, getCurrencies, getCurrenciesRates, getInputAmount } =
    useContext(CurrenciesContext);

    const handleChange = (e) => {
      getInputAmount(e.target.value);
    };

  useEffect(() => {
    getCurrencies();
    getCurrenciesRates();
  }, []);

  return (
    <ChangeCurrenciesContainer>
      <>
        <CustomInput amount={amount} onChange={handleChange}/>
        <SelectDropdown spanData="FROM"/>
        <ChangeIcon />
        <SelectDropdown spanData="TO"/>
      </>
      <MoneyRate />
      <AdviceUse />
    </ChangeCurrenciesContainer>
  );
};
