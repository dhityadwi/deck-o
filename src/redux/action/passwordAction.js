import { putPassword } from "../../service/passwordService";

export const isPasswordStart = () => {
  return {
    type: "PASSWORD/START",
  };
};

export const isPassword = () => {
  return {
    type: "PASSWORD",
  };
};

export const isPasswordError = (message) => {
  return {
    type: "PASSWORD/ERROR",
    payload: {
      message,
    },
  };
};

export const passwordAsyn = (current_password, password) => {
  return (dispatch) => {
    dispatch(isPasswordStart());

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
