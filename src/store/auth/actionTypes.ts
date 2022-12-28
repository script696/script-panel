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
  CHECK_AUTH = "CHECK_AUTH",
  LOADING = "LOADING",
  FIRST_LOAD = "FIRST_LOAD",
}

export type LoginUser = {
  type: ActionType.LOGIN_USER;
  payload: { values: LoginData; navigate: NavigateFunction };
};

export type RegisterUser = {
  type: ActionType.REGISTER_USER;
  payload: { values: RegisterData; navigate: NavigateFunction };
};

export type Loading = {
  type: ActionType.LOADING;
  payload: boolean;
};
export type LoadApp = {
  type: ActionType.FIRST_LOAD;
};
export type Actions = LoginUser | Loading | LoadApp;
