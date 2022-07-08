import { FETCHPRODUCTS, CARTSTATE, GETCURRENCY, GETSINGLECURRENCY } from "./actionsTypes";

export const fetchProducts = (products) => {
  return {
    type: FETCHPRODUCTS,
    payload: products
  };
};

export const cartState = (bol) => {
  return {
    type: CARTSTATE,
    payload: bol

  };
};

export const getCurrency = (currencies) => {
  return {
    type: GETCURRENCY,
    payload: currencies

  };
};

export const getSelectedCurrency = (currency) => {
  return {
    type: GETSINGLECURRENCY,
    payload: currency

  };
};
