import $api from "../../api/api";
import { AUTH_ENDPOINTS } from "../../api/constants/api_endpoints";

import { LoginDto, RegisterDto } from "./authDto/authDto";
import { ChangePasswordDto } from "./authDto/changePasswordDto";

class Auth {
	static fetchLogin(loginData: LoginDto) {
		return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNIN}`, loginData);
	}

	static fetchRegister(registerData: RegisterDto) {
		return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNUP}`, registerData);
	}

	static fetchCheckAuth() {
		return $api.get(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.REFRESH}`);
	}

	static fetchSignOut() {
		return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNOUT}`);
	}

	static fetchChangePassword(data: ChangePasswordDto) {
		return $api.put(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.CHANGE_PASSWORD}`, data);
	}
}

export default Auth;
