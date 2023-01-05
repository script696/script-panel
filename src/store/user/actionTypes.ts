export enum ActionType {
  SET_USER = "SET_USER",
  GET_USER = "GET_USER",
  LOADING = "LOADING",
}

type User = {
  email: string;
  username: string;
  role: string;
};

export type SetUser = {
  type: ActionType.SET_USER;
  payload: User;
};

export type GetUser = {
  type: ActionType.GET_USER;
};

export type Actions = SetUser;
