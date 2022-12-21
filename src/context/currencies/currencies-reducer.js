import {
  GET_CURRENCIES,
  GET_CURRENCIES_RATES,
  GET_INPUT_AMOUNT,
  GET_BASE_RATE,
  GET_CHANGE_RATE,
  GET_CURRENCY_FROM,
  GET_CURRENCY_TO,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: payload,
      };
    case GET_CURRENCIES_RATES:
      return {
        ...state,
        currenciesRates: payload,
      };
    case GET_INPUT_AMOUNT:
      return {
        ...state,
        amount: payload,
      };
    case GET_BASE_RATE:
      return {
        ...state,
        baseFromRate: payload,
      };
    case GET_CHANGE_RATE:
      return {
        ...state,
        changeRate: payload,
      };
    case GET_CURRENCY_FROM:
      return {
        ...state,
        currencyFrom: payload,
      };
    case GET_CURRENCY_TO:
      return {
        ...state,
        currencyTo: payload,
      };
    default:
      return state;
  }
};
