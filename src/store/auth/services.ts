import $api from "../../api/api";
import { AUTH_ENDPOINTS } from "../../api/constants/api_endpoints";
import { LoginDto, RegisterDto } from "./authDto/authDto";

class Auth {
  static fetchLogin(loginData: LoginDto) {
    return $api.post(
      `${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNIN}`,
      loginData
    );
  }

  static fetchRegister(registerData: RegisterDto) {
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
