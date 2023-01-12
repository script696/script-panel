import { LoginData, RegisterData } from "./actionTypes";
import $api from "../../api/api";
import { AUTH_ENDPOINTS } from "../../api/constants/api_endpoints";

class Auth {
  static fetchLogin(loginData: LoginData) {
    return $api.post(
      `${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNIN}`,
      loginData
    );
  }

  static fetchRegister(registerData: RegisterData) {
    return $api.post(
      `${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNUP}`,
      registerData
    );
  }

  static fetchCheckAuth() {
    return $api.get(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.REFRESH} `);
  }

  static fetchSignOut() {
    return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNOUT} `);
  }
}

export default Auth;
