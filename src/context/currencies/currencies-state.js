import React, { useReducer } from "react";
import {
  GET_CURRENCIES,
  GET_CURRENCIES_RATES,
  GET_INPUT_AMOUNT,
} from "../types";

import CurrenciesContext from "./currencies-context";
import CurrenciesReducer from "./currencies-reducer";

export const CurrenciesState = (props) => {
  const initialState = {
    amount: 1.00,
    currencies: [],
    currenciesRates: [],
  };

  const [state, dispatch] = useReducer(CurrenciesReducer, initialState);

  const getCurrencies = async () => {
    try {
      let response = await fetch(
        "https://api.vatcomply.com/currencies"
      );
    
      let res = await response.json();
      dispatch({ type: GET_CURRENCIES, payload: res });
    } catch (e) {
      alert(e)
    }
  };
  const getCurrenciesRates = async () => {
    try {
      let response = await fetch(
        "https://api.vatcomply.com/rates?base=USD"
      );
    
      let res = await response.json();
      dispatch({ type: GET_CURRENCIES_RATES, payload: res });
    } catch (e) {
      alert(e)
    }
  };
  const getInputAmount = (amount) => {
    dispatch({ type: GET_INPUT_AMOUNT, payload: amount });
  };
  return (
    <CurrenciesContext.Provider
      value={{
        amount: state.amount,
        currencies: state.currencies,
        currenciesRates: state.currenciesRates,
        getCurrencies,
        getCurrenciesRates,
        getInputAmount,
      }}
    >
      {props.children}
    </CurrenciesContext.Provider>
  );
};