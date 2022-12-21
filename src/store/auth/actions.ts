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

export { loginUser, registerUser };
