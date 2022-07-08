import { createStore, combineReducers } from "redux";

import { productsReducers } from "./Reducers/productReducer";
import { cartState } from "./Reducers/cartStateReducer";
import { currencyReducer } from "./Reducers/getCurrenciesReducer";
import { selectedCurrency } from "./Reducers/selectedCurrencyReducer";
const allReducers = combineReducers({
  cartState,
  products: productsReducers,
  currencies: currencyReducer,
  selectedCurrency
});
const store = createStore(allReducers);

export default store;
