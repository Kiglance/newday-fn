import creator from "./creator";
import {
  GET_USERS,
  GET_ONE_USER,
  POST_USER,
  LOGIN_USER,
  UPDATE_USER,
  DELETE_USER,
  UPDATE_USER_PROFILE,
} from "..";
import { toast } from "react-toastify";

const token = localStorage.getItem("token");

export const getAllUsers = () => async (dispatch) => {
  try {
    const data = await fetch(`http://localhost:4040/api/v2/users/`);
    const users = await data.json();
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

export const updateUser = (data, userId) => async (dispatch) => {
  try {
    const dt = await fetch(`http://localhost:4040/api/v2/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    const response = await dt.json();

    toast.success(response.message) || toast.error(response.error);
    dispatch(creator(UPDATE_USER, userId));
  } catch (error) {
    toast.error(error);
    return console.log(error);
  }
};

export const updateUserProfile =
  ({ userId, profileId, userInfo }) =>
  async (dispatch) => {
    try {
      const dt = await fetch(
        `http://localhost:4040/api/v2/profile/${userId}/${profileId}`,
        {
          method: "PATCH",
          body: userInfo,
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          mode: "cors",
        }
      );
      const response = await dt.json();
      toast.success(response.message);
      dispatch(creator(UPDATE_USER_PROFILE, response));
    } catch (error) {
      toast.error(error);
      return console.log(error);
    }
  };

export const deleteUser = (userId) => async (dispatch) => {
  try {
    const dt = await fetch(`http://localhost:4040/api/v2/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
      mode: "cors",
    });
    const response = await dt.json();
    toast.success(response.message);
    dispatch(creator(DELETE_USER, userId));
  } catch (error) {
    toast.error(error);
    return console.log(error);
  }
};
