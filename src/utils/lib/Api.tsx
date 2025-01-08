interface LoginRequest {
  username: string;
  password: string;
  fingerprint: string;
}

interface SignupRequest {
  name: string;
  username: string;
  birthday: string;
  email: string;
  password: string;
  phone: string;
  city: string;
}

interface LoginResponse {
  url: string;
}

interface SignupResponse {
  success: boolean;
  message: string;
}

// Base URL
const baseUrl = import.meta.env.VITE_AUTH_API_URL;

if (!baseUrl) {
  throw new Error(
    "The environment variable VITE_AUTH_API_URL is not configured."
  );
};

const getCsrfTokenFromCookies = (): string | null => {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrfToken="));
  return csrfToken ? csrfToken.split("=")[1] : null;
};

export const login = async (
  username: string,
  password: string
): Promise<boolean> => {
  try {
    const fingerprint=""
    const body: LoginRequest = { username, password, fingerprint };

    const response = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(JSON.stringify(errorBody));
    }
    
    // Get CSRF Token from cookies
    const csrfToken = getCsrfTokenFromCookies();
    if (!csrfToken) {
      throw new Error("CSRF Token is missing.");
    }
    console.log(csrfToken)
    //window.location.href = responseData.url;
  } catch (error: any) {
    console.error("Failed: ", error.message);
    return false;
  }

  return true;
};

export const signup = async (
  name: string,
  username: string,
  birthday: string,
  email: string,
  password: string,
  phone: string,
  city: string
): Promise<SignupResponse | any> => {
  try {
    const body: SignupRequest = {
      name,
      username,
      birthday,
      email,
      password,
      phone,
      city,
    };

    const response = await fetch(`${baseUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(JSON.stringify(errorBody));
    }
    
    return response;
  } catch (error: any) {
    console.error("Failed: ", error.message);
    return null;
  }
};
