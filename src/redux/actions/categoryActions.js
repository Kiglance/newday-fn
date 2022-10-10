import creator from "./creator";
import { GET_CATEGORIES, CREATE_CATEGORY } from "..";
import { toast } from "react-toastify";

export const getAllCategories = () => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/categories/`);
    const categories = await datas.json();
    dispatch(creator(GET_CATEGORIES, categories));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};

export const createCategory = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const dt = await fetch(`http://localhost:4040/api/v2/categories/`, {
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
    dispatch(creator(CREATE_CATEGORY, response));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
