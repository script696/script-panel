import { ActionType } from "./actionTypes";
import {
	ChangePasswordPayload,
	LoginPayload,
	RegisterPayload,
	SetAuthPayload,
	SignOutPayload,
} from "./types";

export const login = (payload: LoginPayload) => {
	return {
		payload,
		type: ActionType.LOGIN,
	};
};

export const registerUser = (payload: RegisterPayload) => {
	return {
		payload,
		type: ActionType.REGISTER,
	};
};

export const signOut = (payload: SignOutPayload) => {
	return { payload, type: ActionType.LOGOUT };
};

export const setAuth = (payload: SetAuthPayload) => {
	return { payload, type: ActionType.SET_AUTH };
};

export const changePassword = (payload: ChangePasswordPayload) => {
	return { payload, type: ActionType.CHANGE_PASSWORD };
};

export const checkAuth = () => {
	return { type: ActionType.CHECK_AUTH };
};
