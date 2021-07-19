const initialState = {
  username: "",
  email: "",
  loading: false,
  error: false,
  message: "",
};

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        loading: false,
      };
    case "GET_PROFILE/START":
      return {
        ...state,
        loading: true,
      };

    case "GET_PROFILE/ERROR":
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

export default getProfileReducer;
