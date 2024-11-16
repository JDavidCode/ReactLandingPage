import { saveAccessToken, saveRefreshToken, saveUUIDToken } from "./Auth";

export const login = async (username, password, ipAddress, userAgent) => {
  try {
    const response = await fetch("http://127.0.0.1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, ipAddress, userAgent }),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const responseData = await response.url;
    window.location.href = responseData;
  } catch (error) {
    console.log('Failed: ', error.message);
	return response
  }
  return true;
};

export const signup = async (name, username, birthday, email, password) => {
  try {
    const response = await fetch("http://127.0.0.1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, birthday, email, password }),
    });

    return response;
  } catch (error) {
    console.error("Failed: ", error.message);
  }
};
