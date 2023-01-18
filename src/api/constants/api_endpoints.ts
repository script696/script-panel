const BASE_URL = "http://localhost:5000";

const AUTH_ENDPOINTS = {
  BASE: "auth",
  REFRESH: "refresh",
  SIGNIN: "signin",
  SIGNOUT: "sign-out",
  SIGNUP: "signup",
};

const USER_ENDPOINTS = {
  BASE: "users",
  GET_USER: "getUser",
  UPDATE_USER: "updateUser",
};

export { BASE_URL, AUTH_ENDPOINTS, USER_ENDPOINTS };
