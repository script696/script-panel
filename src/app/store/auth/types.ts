import { NavigateFunction } from "react-router-dom";

import { LoginDto } from "./authDto/loginDto";
import { RegisterDto } from "./authDto/registerDto";
import { ChangePasswordDto } from "./authDto/changePasswordDto";

type Auth = {
	accessToken: string;
	userId: string;
};

export type LoginResponse = Auth;
export type RegisterResponse = Auth;
export type CheckAuthResponse = Auth;
export type ChangePasswordResponse = { message: "Password successfully changed" };
export type LogoutResponse = { message: "Password successfully changed" };

/* Payloads */
export type LoginPayload = {
	data: LoginDto;
	navigate: NavigateFunction;
};

export type RegisterPayload = {
	data: RegisterDto;
	navigate: NavigateFunction;
};

export type SignOutPayload = {
	navigate: NavigateFunction;
};

export type ChangePasswordPayload = {
	data: ChangePasswordDto;
	onCloseModal: () => void;
};

export type SetAuthPayload = { isAuth: boolean; userId: string };
