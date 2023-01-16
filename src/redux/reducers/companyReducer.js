import { GET_COMPANY, GET_ONE_COMPANY } from "..";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: [],
  oneValue: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMPANY:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: payload,
      };

    case GET_ONE_COMPANY:
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
