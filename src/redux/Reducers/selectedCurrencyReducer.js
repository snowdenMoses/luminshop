import * as ActionType from "../Actions/actionsTypes";

const initialCurrency = {
  currency: "USD"
};
export const selectedCurrency = (state = initialCurrency, { type, payload }) => {
  switch (type) {
  case ActionType.GETSINGLECURRENCY:
    return {
      ...state, currency: payload
    };
  default:
    return state;
  }
};
