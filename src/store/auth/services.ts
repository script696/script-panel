import { LoginData, RegisterData } from "./actionTypes";
import $api from "../../api/api";
import { ENDPOINTS } from "../../api/constants/api_endpoints";

class Auth {
  static fetchLogin({ email, password }: LoginData) {
    return $api.post(`${ENDPOINTS.AUTH}/${ENDPOINTS.SIGNIN}`, {
      email,
      password,
    });
  }
  static fetchRegister({ username, email, password }: RegisterData) {
    return $api.post(`${ENDPOINTS.AUTH}/${ENDPOINTS.SIGNUP}`, {
      username,
      email,
      password,
    });
  }
}

export default Auth;
