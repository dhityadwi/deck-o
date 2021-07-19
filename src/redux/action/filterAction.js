import { filterCategory } from "../../service/filterService";

export const isFilterStart = () => {
  return {
    type: "FILTER/START",
  };
};

export const isFilter = (data) => {
  return {
    type: "FILTER",
    payload: {
      filter: data,
    },
  };
};

export const isFilterError = (message) => {
  return {
    type: "FILTER/ERROR",
    payload: {
      message,
    },
  };
};

export const filterAsyns = (category) => {
  return (dispatch) => {
    dispatch(isFilterStart());

    filterCategory(category)
      .then((response) => {
        console.log(response, "respon");

        const { statusCode } = response;
        console.log(statusCode, "stat");
        dispatch(isFilter(response.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isFilterError(error.message));
      });
  };
};
