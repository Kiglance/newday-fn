import creator from "./creator";
import { GET_CLASSES_OF_CATEGORY, ASSIGN_CLASS } from "..";
import { toast } from "react-toastify";

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

export const assignClassToCategory = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const dt = await fetch(`http://localhost:4040/api/v2/category_class`, {
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
    dispatch(creator(ASSIGN_CLASS, response));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
