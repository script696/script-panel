import { ActionType } from "./actionTypes";
import { UpdateUserDto } from "./userDto/userDto";
import { User } from "./types";

export const getUser = () => {
  return { type: ActionType.GET_USER };
};

export const setUser = (userData: User) => {
  return { payload: userData, type: ActionType.SET_USER };
};

export const updateUser = (userData: UpdateUserDto) => {
  return { payload: userData, type: ActionType.UPDATE_USER };
};

export const toggleProfileEditeMode = () => {
  return { type: ActionType.TOGGLE_PROFILE_EDIT_MODE };
};
