export enum ActionType {
  SET_LOADING = "SET_LOADING",
  SET_FIRST_LOAD = "SET_FIRST_LOAD",
}

export type SetLoading = {
  type: ActionType.SET_LOADING;
  payload: boolean;
};

export type SetFirstLoad = {
  type: ActionType.SET_FIRST_LOAD;
};

export type Actions = SetLoading | SetFirstLoad;
