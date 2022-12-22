import { NavigateFunction } from "react-router-dom";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export enum ActionType {
  LOGIN_USER = "LOGIN_USER",
  REGISTER_USER = "REGISTER_USER",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  SUCCESS = "SUCCESS",
  CHECK_AUTH = "CHECK_AUTH",
  PENDING = "PENDING",
  TEST_CHECK = "TEST_CHECK",
}

export type ILoginUser = {
  type: ActionType.LOGIN_USER;
  payload: { values: LoginData; navigate: NavigateFunction };
};

export type IRegisterUser = {
  type: ActionType.REGISTER_USER;
  payload: { values: RegisterData; navigate: NavigateFunction };
};

export type ILoginSuccess = {
  type: ActionType.LOGIN_SUCCESS;
};

export type ISuccess = {
  type: ActionType.SUCCESS;
};

export type IPending = {
  type: ActionType.PENDING;
};

export type Actions = ILoginUser | ILoginSuccess | IPending | ISuccess;
