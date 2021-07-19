import { getProfile } from "../../service/profileServise";

export const isGetProfileStart = () => {
  return {
    type: "GET_PROFILE/START",
  };
};

export const isGetProfile = (data) => {
  return {
    type: "GET_PROFILE",
    payload: {
      username: data.username,
      email: data.email,
    },
  };
};

export const isGetProfileError = (message) => {
  return {
    type: "GET_PROFILE/ERROR",
    payload: {
      message,
    },
  };
};

export const profileAsync = () => {
  return (dispatch) => {
    dispatch(isGetProfileStart());

    getProfile()
      .then((response) => {
        console.log(response);

        dispatch(isGetProfile(response.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isGetProfileError(error.message));
      });
  };
};
