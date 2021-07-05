export const loginUser = async (email, password) => {
  const url =
    "https://wm8mze3jmi.execute-api.ap-southeast-1.amazonaws.com/dev/api/login";
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
  const url =
    "https://wm8mze3jmi.execute-api.ap-southeast-1.amazonaws.com/dev/api/register";
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
    return response;
  } catch (error) {
    throw error;
  }
};
