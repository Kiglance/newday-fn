import creator from "./creator";
import { GET_CLASSES, GET_ONE_CLASS } from "..";

export const getAllClasses = () => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/class/`);
    const classes = await datas.json();
    // console.log(classes);
    dispatch(creator(GET_CLASSES, classes));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};
