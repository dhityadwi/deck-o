const initialState = {
  loadings: false,
  errors: false,
  message: "",
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PASSWORD":
      return {
        ...state,
        loadings: false,
      };

    case "PASSWORD/START":
      return {
        ...state,
        loadings: true,
      };

    case "PASSWORD/ERROR":
      return {
        ...state,
        loadings: false,
        errors: true,
        message: action.payload.message,
      };

    default:
      return state;
  }
};

export default passwordReducer;
