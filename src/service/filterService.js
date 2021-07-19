export const filterCategory = async (category) => {
  const url = "https://deck-o.herokuapp.com/api/getDeckByCategory";
  const data = {
    category,
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

    return response.json();
  } catch (error) {
    throw error;
  }
};
