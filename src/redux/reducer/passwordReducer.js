const initialState = {
  current_password: "",
  password: "",
  loading: false,
  error: false,
  message: "",
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PASSWORD":
      return {
        ...state,
        current_password: action.payload.current_password,
        password: action.payload.password,
        loading: false,
      };

    case "PASSWORD/START":
      return {
        ...state,
        loading: true,
      };

    case "PASSWORD/ERROR":
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

export default passwordReducer;
