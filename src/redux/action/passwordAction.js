import { putPassword } from "../../service/passwordService";

export const isPasswordStart = () => {
  return {
    type: "PASSWORD/START",
  };
};

export const isPassword = (currentPass, newPass, changePassStat) => {
  return {
    type: "PASSWORD",
    payload: {
      currentPass,
      newPass,
      changePassStat,
    },
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

        const { status } = response;
        console.log(status, "stat");
        dispatch(isPassword(current_password, password, status));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isPasswordError(error.message));
      });
  };
};
