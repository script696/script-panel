import { UpdateUserDto } from "./models/userModel";

export enum ActionType {
  SET_USER = "SET_USER",
  GET_USER = "GET_USER",
  UPDATE_USER = "UPDATE_USER",
  LOADING = "LOADING",
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

export type GetUser = {
  type: ActionType.GET_USER;
};

export type UpdateUser = {
  type: ActionType.UPDATE_USER;
  payload: UpdateUserDto;
};

export type Actions = SetUser;
