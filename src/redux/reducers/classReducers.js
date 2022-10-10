import { GET_CLASSES, CREATE_CLASS } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CLASSES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case CREATE_CLASS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...state.data, payload],
      };

    default:
      return state;
  }
};
