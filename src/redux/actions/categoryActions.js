import creator from "./creator";
import { GET_CATEGORIES, GET_ONE_CATEGORY } from "..";

export const getAllCategories = () => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/categories/`);
    const categories = await datas.json();
    // console.log(categories);
    dispatch(creator(GET_CATEGORIES, categories));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
