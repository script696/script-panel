import { ActionType } from "./actionTypes";
import { UpdateUserDto } from "./userDto/userDto";
import { User } from "./types";

export const getUser = () => {
  return { type: ActionType.GET_USER };
};

export const setUser = (userData: User) => {
  return { type: ActionType.SET_USER, payload: userData };
};

export const updateUser = (userData: UpdateUserDto) => {
  return { type: ActionType.UPDATE_USER, payload: userData };
};

export const toggleProfileEditeMode = () => {
  return { type: ActionType.TOGGLE_PROFILE_EDIT_MODE };
};