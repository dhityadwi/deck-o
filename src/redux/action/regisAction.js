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
