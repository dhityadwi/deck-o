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
