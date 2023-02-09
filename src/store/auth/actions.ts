import { NavigateFunction } from "react-router-dom";

import { ActionType, ChangePasswordPayload } from "./actionTypes";
import { LoginDto, RegisterDto } from "./authDto/authDto";

export const loginUser = (values: LoginDto, navigate: NavigateFunction) => {
	return {
		payload: { navigate, values },
		type: ActionType.LOGIN_USER,
	};
};

export const registerUser = (values: RegisterDto, navigate: NavigateFunction) => {
	return {
		payload: { navigate, values },
		type: ActionType.REGISTER_USER,
	};
};

export const checkAuth = () => {
	return { type: ActionType.CHECK_AUTH };
};

export const signOutUser = (navigate: NavigateFunction) => {
	return { payload: { navigate }, type: ActionType.SIGN_OUT_USER };
};

export const changePassword = (data: ChangePasswordPayload) => {
	return { payload: data, type: ActionType.CHANGE_PASSWORD };
};
