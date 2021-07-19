export const loginUser = async (email, password) => {
  const url = "https://deck-o.herokuapp.com/api/login";
  const data = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //auth : lokalstorage.getitem untuk get deck
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const regisUser = async (username, email, password) => {
  const url = "https://deck-o.herokuapp.com/api/register";
  const data = {
    username,
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response;
    }
    throw new Error("error regis");
  } catch (error) {
    throw error;
  }
};
