const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_UUID_KEY ="userToken";

export const saveUUIDToken = (token) => {
  localStorage.setItem(USER_UUID_KEY, token);
};
export const saveAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};
export const saveRefreshToken = (token) => {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
};
export const getUUIDToken = () => {
  return localStorage.getItem(USER_UUID_KEY);
};
export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};
export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};
export const removeAuthToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};
