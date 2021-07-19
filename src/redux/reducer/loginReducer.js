import jwt_decode from "jwt-decode";

const store = window.localStorage;
const token = store.getItem("token") || "";

const decode = token ? jwt_decode(token) : {};

const initialState = {
  email: decode.email,
  username: decode.username,
  id: decode.id,
  token: "",
  loginStat: "",
  loading: false,
  error: false,
  message: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        id: action.payload.id,
        token: action.payload.token,
        loginStat: action.payload.loginStat,
        loading: false,
      };
    case "LOGIN/START":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN/ERROR":
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
export default loginReducer;
