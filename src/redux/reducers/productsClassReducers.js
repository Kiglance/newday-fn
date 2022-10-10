import { GET_PRODUCTS_OF_CLASS, ASSIGN_PRODUCT } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_OF_CLASS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case ASSIGN_PRODUCT:
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
