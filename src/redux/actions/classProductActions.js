import creator from "./creator";
import { GET_PRODUCTS_OF_CLASS } from "..";

export const getProductsOfClass = (classId) => async (dispatch) => {
  try {
    const datas = await fetch(
      `http://localhost:4040/api/v2/products/product_of_class/${classId}`
    );
    const productsOfClass = await datas.json();
    dispatch(creator(GET_PRODUCTS_OF_CLASS, productsOfClass));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
