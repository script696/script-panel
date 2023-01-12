import { NavigateFunction } from "react-router-dom";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  role: string;
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export enum ActionType {
  LOGIN_USER = "LOGIN_USER",
  REGISTER_USER = "REGISTER_USER",
  SIGN_OUT_USER = "SIGN_OUT_USER",
  CHECK_AUTH = "CHECK_AUTH",
  SET_USER_AUTH = "SET_USER_AUTH",
}

export type LoginUser = {
  type: ActionType.LOGIN_USER;
  payload: { values: LoginData; navigate: NavigateFunction };
};

export type SetUserAuth = {
  type: ActionType.SET_USER_AUTH;
  payload: boolean;
};

export type RegisterUser = {
  type: ActionType.REGISTER_USER;
  payload: { values: RegisterData; navigate: NavigateFunction };
};

export type SignOutUser = {
  type: ActionType.SIGN_OUT_USER;
  payload: { navigate: NavigateFunction };
};

export type Actions = SetUserAuth;
