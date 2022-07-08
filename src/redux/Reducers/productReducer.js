import * as ActionType from "../Actions/actionsTypes";
const initialState = {
  products: []
};

export const productsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
  case ActionType.FETCHPRODUCTS:
    return { ...state, products: payload };
  default:
    return state;
  }
};
