import {
  GET_USERS,
  POST_USER,
  LOGIN_USER,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  DELETE_USER,
  UPDATE_USER_PROFILE,
} from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      console.log(state, payload, "*********");
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload.body,
      };

    case POST_USER:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };

    case UPDATE_USER:
      const id = payload.id;
      const newState = state.data;
      const id1 = newState.findIndex((val) => {
        return val.id === id;
      });

      newState[id1] = payload;

      console.log(state.data, payload, "state & payload");

      return {
        ...state,
        isLoading: false,
        data: [...state.data],
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case DELETE_USER:
      const deletedData = state?.data?.filter(
        ({ userId }) => userId !== payload
      );
      return {
        ...state,
        isLoading: false,
        data: deletedData,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        isLoading: false,
        data: state.data,
      };

    default:
      return state;
  }
};
