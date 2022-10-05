import creator from "./creator";
import { GET_PRODUCTS, GET_ONE_PRODUCT } from "..";

export const getAllProducts = () => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/products/`);
    const products = await datas.json();
    dispatch(creator(GET_PRODUCTS, products));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};

export const getOneProduct = (prodId) => async (dispatch) => {
  try {
    const data = await fetch(`http://localhost:4040/api/v2/products/${prodId}`);
    const oneProduct = await data.json();
    dispatch(creator(GET_ONE_PRODUCT, oneProduct));
  } catch (error) {
    return console.log(error);
  }
};

export const getSearchedProducts = (searchedInput) => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/products/`);
    const products = await datas.json();

    const pdts = products.body;
    const searchData = pdts.filter((values) => {
      return values.productName.toLowerCase().includes(searchedInput);
    });
    dispatch(creator(GET_PRODUCTS, searchData));
  } catch (error) {
    // console.log(error);
    return console.log(error);
  }
};
