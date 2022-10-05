import { GET_CATEGORIES, GET_ONE_CATEGORY } from "..";

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

    default:
      return state;
  }
};
