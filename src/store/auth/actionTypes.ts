import { UserData } from "./types";

export enum ActionType {
  LOGIN_USER = "LOGIN_USER",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGOUT_USER = "LOGOUT_USER",
  LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS",
}

export type ILoginUser = {
  type: ActionType.LOGIN_USER;
  payload: UserData;
};

export type Actions = ILoginUser;
