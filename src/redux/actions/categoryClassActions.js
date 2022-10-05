import creator from "./creator";
import { GET_CLASSES_OF_CATEGORY } from "..";

export const getClassesOfCategory = (catId) => async (dispatch) => {
  try {
    const datas = await fetch(
      `http://localhost:4040/api/v2/class/class_of_category/${catId}`
    );
    const classesOfCategory = await datas.json();
    dispatch(creator(GET_CLASSES_OF_CATEGORY, classesOfCategory));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};

// http://localhost:4040/api/v2/products/product_of_class/225cfc68-8843-4f64-bcdf-1664760577f0
