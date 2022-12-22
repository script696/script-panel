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

const checkAuth = () => {
  return { type: ActionType.CHECK_AUTH };
};

const setLoading = (isLoading: boolean) => {
  return { type: ActionType.LOADING, payload: isLoading };
};

const setFirstLoad = () => {
  return { type: ActionType.FIRST_LOAD };
};

export { loginUser, setFirstLoad, registerUser, checkAuth, setLoading };
