import { ActionType } from "./actionTypes";
import { UpdateUserDto, UserDto } from "./models/userModel";

export const getUser = () => {
  return { type: ActionType.GET_USER };
};

export const setUser = (userData: UserDto) => {
  return { type: ActionType.SET_USER, payload: userData };
};

export const updateUser = (userData: UpdateUserDto) => {
  return { type: ActionType.UPDATE_USER, payload: userData };
};

export const toggleProfileEditeMode = () => {
  return { type: ActionType.TOGGLE_PROFILE_EDIT_MODE };
};
