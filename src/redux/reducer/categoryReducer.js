const initialState = {
  data: [],

  loading: false,
  error: false,
  message: "",
};

const getCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,

        data: action.payload.data,
        loading: false,
      };
    case "GET_CATEGORY/START":
      return {
        ...state,
        loading: true,
      };

    case "GET_CATEGORY/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default getCategoryReducer;
