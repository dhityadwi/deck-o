export const getProfile = async () => {
  const url = "https://deck-o.herokuapp.com/api/getProfile";

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

export const putProfile = async (username, email) => {
  const url = "https://deck-o.herokuapp.com/api/putProfile";

  const data = {
    username,
    email,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response;
    }
    throw new Error("Email or Username already used.");
  } catch (error) {
    throw error;
  }
};
