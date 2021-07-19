import { loginUser } from "../../service/userService";
import jwt_decode from "jwt-decode";

export const isLoginStart = () => {
  return {
    type: "LOGIN/START",
  };
};

export const isLogin = (email, username, id, token, loginStat) => {
  return {
    type: "LOGIN",
    payload: {
      email,
      username,
      id,
      token,
      loginStat,
    },
  };
};

export const isLoginError = (message) => {
  return {
    type: "LOGIN/ERROR",
    payload: {
      message,
    },
  };
};

export const loginAsync = (email, password) => {
  return (dispatch) => {
    dispatch(isLoginStart());

    const store = window.localStorage;

    loginUser(email, password)
      .then((response) => {
        const { token } = response;

        console.log(response);

        const decode = jwt_decode(token);
        store.setItem("token", token);

        const { statusCode } = response;
        dispatch(isLogin(email, decode.username, decode.id, token, statusCode));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isLoginError(error.message));
      });
  };
};
