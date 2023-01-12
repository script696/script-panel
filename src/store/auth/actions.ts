import { ActionType, LoginData, RegisterData } from "./actionTypes";
import { NavigateFunction } from "react-router-dom";

export const loginUser = (values: LoginData, navigate: NavigateFunction) => {
  return {
    type: ActionType.LOGIN_USER,
    payload: { values, navigate },
  };
};

export const registerUser = (
  values: RegisterData,
  navigate: NavigateFunction
) => {
  return {
    type: ActionType.REGISTER_USER,
    payload: { values, navigate },
  };
};

export const checkAuth = () => {
  return { type: ActionType.CHECK_AUTH };
};

export const setUserAuth = (isUserAuth: boolean) => {
  return { type: ActionType.SET_USER_AUTH };
};

export const signOutUser = (navigate: NavigateFunction) => {
  return { type: ActionType.SIGN_OUT_USER, payload: { navigate } };
};
