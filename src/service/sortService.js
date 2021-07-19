export const sortFilter = async (sort) => {
  const url = "https://deck-o.herokuapp.com/api/getSortDecks";
  const data = {
    sort,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    console.log(response, "servisesort");
    return response.json();
  } catch (error) {
    throw error;
  }
};
