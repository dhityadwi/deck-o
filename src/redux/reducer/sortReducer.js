const initialState = {
  data: [],
  loadingSort: false,
  error: false,
  message: "",
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        data: action.payload.data,
        loadingSort: false,
      };

    case "SORT/START":
      return {
        ...state,
        loadingSort: true,
      };

    case "SORT/ERROR":
      return {
        ...state,
        loadingSort: false,
        error: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default sortReducer;
