import $api from "../../../shared/api/api";
import { AUTH_ENDPOINTS } from "../../../shared/api/constants/api_endpoints";

import { ChangePasswordDto } from "./authDto/changePasswordDto";
import { LoginDto } from "./authDto/loginDto";
import { RegisterDto } from "./authDto/registerDto";
import {
	ChangePasswordResponse,
	CheckAuthResponse,
	LoginResponse,
	LogoutResponse,
	RegisterResponse,
} from "./types";

class Auth {
	static fetchLogin(data: LoginDto): Promise<LoginResponse> {
		return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNIN}`, data);
	}

	static fetchRegister(data: RegisterDto): Promise<RegisterResponse> {
		return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNUP}`, data);
	}

	static fetchLogout(): Promise<LogoutResponse> {
		return $api.post(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.SIGNOUT}`);
	}

	static fetchCheckAuth(): Promise<CheckAuthResponse> {
		return $api.get(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.REFRESH}`);
	}

	static fetchChangePassword(data: ChangePasswordDto): Promise<ChangePasswordResponse> {
		return $api.put(`${AUTH_ENDPOINTS.BASE}/${AUTH_ENDPOINTS.CHANGE_PASSWORD}`, data);
	}
}

export default Auth;
