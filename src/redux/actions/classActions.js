import creator from "./creator";
import { GET_CLASSES, CREATE_CLASS } from "..";
import { toast } from "react-toastify";

export const getAllClasses = () => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/class/`);
    const classes = await datas.json();
    dispatch(creator(GET_CLASSES, classes));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};

export const createClass = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const dt = await fetch(`http://localhost:4040/api/v2/class/`, {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await dt.json();
    if (response.error !== undefined) {
      toast.error(response.error);
    }
    if (response.message !== undefined) {
      toast.success(response.message);
    }
    dispatch(creator(CREATE_CLASS, response));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
//
