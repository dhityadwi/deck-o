export const putPassword = async (current_password, password) => {
  const url = "https://deck-o.herokuapp.com/api/putPassword";

  const data = {
    current_password,
    password,
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
    throw new Error("The current password is not the same.");
  } catch (error) {
    throw error;
  }
};
