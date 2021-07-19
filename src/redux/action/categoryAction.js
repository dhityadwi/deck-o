import { getCategory } from "../../service/deckService";

export const isGetCategoryStart = () => {
  return {
    type: "GET_CATEGORY/START",
  };
};

export const isGetCategory = (data) => {
  return {
    type: "GET_CATEGORY",
    payload: {
      data: data,
    },
  };
};

export const isGetCategoryError = (message) => {
  return {
    type: "GET_CATEGORY/ERROR",
    payload: {
      message,
    },
  };
};

export const categoryAsync = () => {
  return (dispatch) => {
    dispatch(isGetCategoryStart());

    getCategory()
      .then((response) => {
        console.log(response);

        dispatch(isGetCategory(response.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isGetCategoryError(error.message));
      });
  };
};
