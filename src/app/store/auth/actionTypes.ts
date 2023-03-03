import {
	ChangePasswordPayload,
	LoginPayload,
	RegisterPayload,
	SetAuthPayload,
	SignOutPayload,
} from "./types";

export enum ActionType {
	LOGIN = "LOGIN",
	REGISTER = "REGISTER",
	LOGOUT = "LOGOUT",
	CHECK_AUTH = "CHECK_AUTH",
	SET_AUTH = "SET_AUTH",
	CHANGE_PASSWORD = "CHANGE_PASSWORD",
}

export type Login = {
	type: ActionType.LOGIN;
	payload: LoginPayload;
};

export type SetUserAuth = {
	type: ActionType.SET_AUTH;
	payload: SetAuthPayload;
};

export type Register = {
	type: ActionType.REGISTER;
	payload: RegisterPayload;
};

export type SignOut = {
	type: ActionType.LOGOUT;
	payload: SignOutPayload;
};

export type ChangePassword = {
	type: ActionType.CHANGE_PASSWORD;
	payload: ChangePasswordPayload;
};

export type Actions = SetUserAuth;
