import { putProfile } from "../../service/profileServise";

export const isPutProfileStart = () => {
  return {
    type: "PUT_PROFILE/START",
  };
};

export const isPutProfile = (username, email) => {
  return {
    type: "PUT_PROFILE",
    payload: {
      username,
      email,
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

        dispatch(isPutProfile(username, email));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isPutProfileError(error.message));
      });
  };
};
