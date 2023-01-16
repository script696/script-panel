import { ActionType } from "./actionTypes";
import { NavigateFunction } from "react-router-dom";
import { LoginDto, RegisterDto } from "./authDto/authDto";

export const loginUser = (values: LoginDto, navigate: NavigateFunction) => {
  return {
    type: ActionType.LOGIN_USER,
    payload: { values, navigate },
  };
};

export const registerUser = (
  values: RegisterDto,
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

export const signOutUser = (navigate: NavigateFunction) => {
  return { type: ActionType.SIGN_OUT_USER, payload: { navigate } };
};
