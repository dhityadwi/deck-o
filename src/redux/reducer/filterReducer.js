const initialState = {
  filter: [],
  loadingFilter: false,
  error: false,
  message: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        filter: action.payload.filter,
        loadingFilter: false,
      };

    case "FILTER/START":
      return {
        ...state,
        loadingFilter: true,
      };

    case "FILTER/ERROR":
      return {
        ...state,
        loadingFilter: false,
        error: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default filterReducer;
