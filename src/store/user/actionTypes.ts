import { UpdateUserDto } from "./userDto/userDto";

export enum ActionType {
  SET_USER = "SET_USER",
  GET_USER = "GET_USER",
  UPDATE_USER = "UPDATE_USER",
  TOGGLE_PROFILE_EDIT_MODE = "TOGGLE_PROFILE_EDIT_MODE",
}

type User = {
  email: string;
  username: string;
  role: string;
  about: string;
  avatar: string;
};

export type SetUser = {
  type: ActionType.SET_USER;
  payload: User;
};

export type SetProfileEditeMode = {
  type: ActionType.TOGGLE_PROFILE_EDIT_MODE;
};

export type UpdateUser = {
  type: ActionType.UPDATE_USER;
  payload: UpdateUserDto;
};

export type Actions = SetUser | SetProfileEditeMode;
