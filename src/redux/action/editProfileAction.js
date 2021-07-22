import { putProfile } from "../../service/profileServise";

export const isPutProfileStart = () => {
  return {
    type: "PUT_PROFILE/START",
  };
};

export const isPutProfile = (username, email, editProfStat) => {
  return {
    type: "PUT_PROFILE",
    payload: {
      username,
      email,
      editProfStat,
    },
  };
};

export const isPutProfileError = (message) => {
  return {
    type: "PUT_PROFILE/ERROR",
    payload: {
      message,
    },
  };
};

export const putProfileAsync = (username, email) => {
  return (dispatch) => {
    dispatch(isPutProfileStart());

    putProfile(username, email)
      .then((response) => {
        console.log(response);

        const { status } = response;
        console.log(status, "stat");
        dispatch(isPutProfile(username, email, status));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isPutProfileError(error.message));
      });
  };
};
