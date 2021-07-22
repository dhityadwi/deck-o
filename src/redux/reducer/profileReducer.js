const initialState = {
  username: "",
  email: "",
  loadingProf: false,
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
        loadingProf: false,
      };
    case "GET_PROFILE/START":
      return {
        ...state,
        loadingProf: true,
      };

    case "GET_PROFILE/ERROR":
      return {
        ...state,
        loadingProf: false,
        error: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default getProfileReducer;
