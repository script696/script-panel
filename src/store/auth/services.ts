import { LoginData, RegisterData } from "./actionTypes";
import $api from "../../api/api";
import { AUTH_ENDPOINTS } from "../../api/constants/api_endpoints";

class Auth {
  static fetchLogin({ email, password }: LoginData) {
    return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNIN}`, {
      email,
      password,
    });
  }
  static fetchRegister({ username, email, password }: RegisterData) {
    return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNUP}`, {
      username,
      email,
      password,
    });
  }

  static fetchCheckAuth() {
    return $api.get(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.REFRESH}`);
  }

  static fetchTestCheck() {
    return $api.get(`users/check`);
  }
}

export default Auth;
