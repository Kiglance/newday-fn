import { GET_CATEGORIES, CREATE_CATEGORY } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case CREATE_CATEGORY:
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
