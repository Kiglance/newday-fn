import { GET_ONE_PRODUCT } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  oneValue: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ONE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        oneValue: payload,
      };

    default:
      return state;
  }
};
