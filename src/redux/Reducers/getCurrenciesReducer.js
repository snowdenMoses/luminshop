import * as ActionType from "../Actions/actionsTypes";
const initialState = {
  currencies: []
};

export const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ActionType.GETCURRENCY:
    return { ...state, currencies: payload };
  default:
    return state;
  }
};
