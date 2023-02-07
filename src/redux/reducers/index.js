import productsReducers from "./productsReducers";
import oneProductReducer from "./oneProductReducer";
import categoryReducers from "./categoryReducers";
import classReducers from "./classReducers";
import { combineReducers } from "redux";
import classOfCategory from "./classOfCategory";
import productsClassReducers from "./productsClassReducers";
import userReducer from "./userReducer";
import companyReducer from "./companyReducer";

const allReducers = combineReducers({
  products: productsReducers,
  // oneProduct: productsReducers,
  categories: categoryReducers,
  oneProduct: oneProductReducer,
  classes: classReducers,
  classesOfCategory: classOfCategory,
  productsOfClass: productsClassReducers,
  users: userReducer,
  companies: companyReducer,
});

export default allReducers;
