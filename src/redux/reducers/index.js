import productsReducers from "./productsReducers";
import oneProductReducer from "./oneProductReducer";
import categoryReducers from "./categoryReducers";
import classReducers from "./classReducers";
import { combineReducers } from "redux";
import classOfCategory from "./classOfCategory";
import productsClassReducers from "./productsClassReducers";

const allReducers = combineReducers({
  products: productsReducers,
  oneProduct: productsReducers,
  categories: categoryReducers,
  oneProduct: oneProductReducer,
  classes: classReducers,
  classesOfCategory: classOfCategory,
  productsOfClass: productsClassReducers,
});

export default allReducers;
