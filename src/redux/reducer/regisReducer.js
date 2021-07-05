const initialState = {
  username: "",
  email: "",
  password: "",
  regisStat: "",
};

const regisReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGIS":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        regisStat: action.payload.regisStat,
      };
    default:
      return state;
  }
};

export default regisReducer;
