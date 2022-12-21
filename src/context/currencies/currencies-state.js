import React, { useReducer } from "react";
import {
  GET_CURRENCIES,
  GET_CURRENCIES_RATES,
  GET_INPUT_AMOUNT,
  GET_BASE_RATE,
  GET_CHANGE_RATE,
  GET_CURRENCY_FROM,
  GET_CURRENCY_TO,
} from "../types";

import CurrenciesContext from "./currencies-context";
import CurrenciesReducer from "./currencies-reducer";

export const CurrenciesState = (props) => {
  const initialState = {
    amount: 1.00,
    currencyFrom: "Us Dollars",
    currencyTo: "Euro",
    baseFromRate: "USD",
    changeRate: "EUR",
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
  const getCurrenciesRates = async (baseFromRate) => {
    try {
      let response = await fetch(
        `https://api.vatcomply.com/rates?base=${baseFromRate}`
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
  const getBaseRate = (baseRate) => {
    dispatch({ type: GET_BASE_RATE, payload: baseRate });
  };
  const getChangeRate = (changeRate) => {
    dispatch({ type: GET_CHANGE_RATE, payload: changeRate });
  };
  const getCurrencyFrom = (currencyFromName) => {
    dispatch({ type: GET_CURRENCY_FROM, payload: currencyFromName });
  };
  const getCurrencyTo = (currencyToName) => {
    dispatch({ type: GET_CURRENCY_TO, payload: currencyToName });
  };
  return (
    <CurrenciesContext.Provider
      value={{
        amount: state.amount,
        currencies: state.currencies,
        currenciesRates: state.currenciesRates,
        baseFromRate: state.baseFromRate,
        changeRate: state.changeRate,
        currencyFrom: state.currencyFrom,
        currencyTo: state.currencyTo,
        getCurrencies,
        getCurrenciesRates,
        getInputAmount,
        getBaseRate,
        getChangeRate,
        getCurrencyFrom,
        getCurrencyTo,
      }}
    >
      {props.children}
    </CurrenciesContext.Provider>
  );
};