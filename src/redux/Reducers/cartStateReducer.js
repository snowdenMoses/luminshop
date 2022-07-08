import * as ActionType from "../Actions/actionsTypes";
const initialState = {
  cartState: true
};

export const cartState = (state = initialState, { type, payload }) => {
  switch (type) {
  case ActionType.CARTSTATE:
    return { ...state, cartState: payload };
  default:
    return state;
  }
};
