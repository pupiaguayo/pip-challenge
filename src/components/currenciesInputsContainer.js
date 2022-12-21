import React, { useEffect, useContext } from "react";
import { ChangeCurrenciesContainer, ButtonChange } from "../styles/inputsContainerStyles";
import { CustomInput } from "./customInput";
import { ChangeIcon } from "../utils/icons";
import { MoneyRate } from "./moneyRate";
import { AdviceUse } from "./adviceUse";
import { SelectDropdown } from "./customDropdown";
import { LastUpdated } from "./lastUpdated";
import CurrenciesContext from "../context/currencies/currencies-context";

export const CurrenciesInputs = () => {
  const { amount, getCurrencies, getInputAmount } =
    useContext(CurrenciesContext);

  const handleChange = (e) => {
    getInputAmount(e.target.value);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <ChangeCurrenciesContainer>
      <>
        <CustomInput amount={amount} onChange={handleChange} />
        <SelectDropdown spanData="FROM" />
        <ButtonChange>
          <ChangeIcon />
        </ButtonChange>
        <SelectDropdown spanData="TO" />
      </>
      <MoneyRate />
      <AdviceUse />
      <LastUpdated />
    </ChangeCurrenciesContainer>
  );
};
