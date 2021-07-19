import { putPassword } from "../../service/passwordService";

export const isPasswordStart = () => {
  return {
    type: "PASSWORD/START",
  };
};

export const isPassword = (current_password, password) => {
  return {
    type: "PASSWORD",
    payload: {
      current_password,
      password,
    },
  };
};

export const isPasswordError = (message) => {
  return {
    type: "PASSWORD/ERROR",
    paylaod: {
      message,
    },
  };
};

export const passwordAsyn = (current_password, password) => {
  return (dispatch) => {
    dispatch(isPassword());

    putPassword(current_password, password)
      .then((response) => {
        console.log(response, "respons");

        dispatch(isPassword(current_password, password));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isPasswordError(error.message));
      });
  };
};
