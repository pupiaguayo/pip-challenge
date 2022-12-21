
import { GET_CURRENCIES, GET_CURRENCIES_RATES, GET_INPUT_AMOUNT } from "../types";

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
    default:
      return state;
  }
};