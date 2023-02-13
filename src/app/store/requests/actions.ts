import { ActionType } from "./actionTypes";

export const setLoading = (isLoading: boolean) => {
  return { payload: isLoading, type: ActionType.SET_LOADING };
};

export const setFirstLoad = () => {
  return { type: ActionType.SET_FIRST_LOAD };
};
