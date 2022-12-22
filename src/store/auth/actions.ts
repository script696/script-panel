import { ActionType, LoginData, RegisterData } from "./actionTypes";
import { NavigateFunction } from "react-router-dom";

const loginUser = (values: LoginData, navigate: NavigateFunction) => {
  return {
    type: ActionType.LOGIN_USER,
    payload: { values, navigate },
  };
};

const registerUser = (values: RegisterData, navigate: NavigateFunction) => {
  return {
    type: ActionType.REGISTER_USER,
    payload: { values, navigate },
  };
};

const loginSuccess = () => {
  return {
    type: ActionType.LOGIN_SUCCESS,
  };
};

const pending = () => {
  return {
    type: ActionType.PENDING,
  };
};

const success = () => {
  return {
    type: ActionType.SUCCESS,
  };
};

const testAction = () => {
  return {
    type: ActionType.TEST_CHECK,
  };
};

const checkAuth = () => {
  return { type: ActionType.CHECK_AUTH };
};

export {
  loginUser,
  registerUser,
  loginSuccess,
  checkAuth,
  pending,
  success,
  testAction,
};
