export const getMyDeck = async () => {
  const url = "https://deck-o.herokuapp.com/api/myDeck";

  // console.log(localStorage.getItem("token"));

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCategory = async () => {
  const url = "https://deck-o.herokuapp.com/api/getCategory";

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
