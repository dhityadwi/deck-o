const initialState = {
  username: "",
  email: "",
  loading: false,
  error: false,
  message: "",
};

const putProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PUT_PROFILE":
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        loading: false,
      };
    case "PUT_PROFILE/START":
      return {
        ...state,
        loading: true,
      };

    case "PUT_PROFILE/ERROR":
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

export default putProfileReducer;
