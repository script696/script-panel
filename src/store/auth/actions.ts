import { ActionType, UserData } from "./actionTypes";

export const loginUser = (values: UserData) => {
  return {
    type: ActionType.LOGIN_USER,
    payload: values,
  };
};
