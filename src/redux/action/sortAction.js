import { sortFilter } from "../../service/sortService";

export const isSortStart = () => {
  return {
    type: "SORT/START",
  };
};

export const isSort = (data) => {
  return {
    type: "SORT",
    payload: {
      data,
    },
  };
};

export const isSortError = (message) => {
  return {
    type: "SORT/ERROR",
    payload: {
      message,
    },
  };
};

export const shortAsyns = (sort) => {
  return (dispatch) => {
    dispatch(isSortStart());

    sortFilter(sort)
      .then((response) => {
        console.log(response, "respon");

        const { status, data } = response;
        console.log(status, "stat");
        console.log(data);
        dispatch(isSort(response.data[0]));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(isSortError(error.message));
      });
  };
};
