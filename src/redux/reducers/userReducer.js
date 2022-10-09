import { GET_USERS, POST_USER, LOGIN_USER } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case POST_USER:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };

    case LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    default:
      return state;
  }
};
