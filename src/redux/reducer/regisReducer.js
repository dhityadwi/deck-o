const initialState = {
  username: "",
  email: "",
  password: "",
  regisStat: "",
  loading: false,
  error: false,
  message: "",
};

const regisReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGIS":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        regisStat: action.payload.regisStat,
        loading: false,
      };

    case "REGIS/START":
      return {
        ...state,
        loading: true,
      };

    case "REGIS/ERROR":
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

export default regisReducer;
