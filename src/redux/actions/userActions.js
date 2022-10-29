import creator from "./creator";
import { GET_USERS, GET_ONE_USER, POST_USER, LOGIN_USER } from "..";
import { toast } from "react-toastify";

export const getAllUsers = () => async (dispatch) => {
  try {
    const data = await fetch(`http://localhost:4040/api/v2/users/`);
    const users = await data.json();
    console.log("_____________", users);
    dispatch(creator(GET_USERS, users));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};

export const getOneUser = (userId) => async (dispatch) => {
  try {
    const data = await fetch(`http://localhost:4040/api/v2/users/${userId}`);
    const oneUser = await data.json();
    dispatch(creator(GET_ONE_USER, oneUser));
  } catch (error) {
    toast.error(error);
    return console.log(error);
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const dt = await fetch(`http://localhost:4040/api/v2/users/register`, {
      method: "POST",
      body: data,
      mode: "cors",
    });
    const response = await dt.json();
    if (response.error !== undefined) {
      toast.error(response.error);
    }
    if (response.message !== undefined) {
      toast.success(response.message);
    }

    dispatch(creator(POST_USER, response));
  } catch (error) {
    toast.error(error);
    return console.log(error);
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const dt = await fetch(`http://localhost:4040/api/v2/users/login`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const response = await dt.json();
    toast.success(response.message);
    dispatch(creator(LOGIN_USER, response));
  } catch (error) {
    toast.error(error);
    return console.log(error);
  }
};
