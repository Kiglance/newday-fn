import creator from "./creator";
import { GET_PRODUCTS_OF_CLASS, ASSIGN_PRODUCT } from "..";
import { toast } from "react-toastify";

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

export const assignProductToClass = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const dt = await fetch(`http://localhost:4040/api/v2/class_product/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const response = await dt.json();
    if (response.error !== undefined) {
      toast.error(response.error);
    }
    if (response.message !== undefined) {
      toast.success(response.message);
    }
    dispatch(creator(ASSIGN_PRODUCT, response));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
