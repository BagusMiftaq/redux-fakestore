import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const rootReducers = combineReducers({
  allProduct: productReducer,
  product: selectedProductReducer,
});
