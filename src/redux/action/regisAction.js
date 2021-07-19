import { regisUser } from "../../service/userService";

export const isRegisStart = () => {
  return {
    type: "REGIS/START",
  };
};

export const isRegis = (username, email, password, regisStat) => {
  return {
    type: "REGIS",
    payload: {
      username,
      email,
      password,
      regisStat,
    },
  };
};

export const isRegisError = (message) => {
  return {
    type: "REGIS/ERROR",
    payload: {
      message,
    },
  };
};

export const regisAsyns = (username, email, password) => {
  return (dispatch) => {
    dispatch(isRegisStart());

    regisUser(username, email, password)
      .then((response) => {
        console.log(response, "respon");

        const { status } = response;
        console.log(status, "stat");
        dispatch(isRegis(username, email, password, status));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isRegisError(error.message));
      });
  };
};
