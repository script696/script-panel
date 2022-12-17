import { ActionType } from "./actionTypes";
import { UserData } from "./types";

export const loginUser = (values: UserData) => {
  return {
    type: ActionType.LOGIN_USER,
    payload: values,
  };
};
