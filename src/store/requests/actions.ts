import { ActionType } from "./actionTypes";

export const setLoading = (isLoading: boolean) => {
  return { type: ActionType.SET_LOADING, payload: isLoading };
};

export const setFirstLoad = () => {
  return { type: ActionType.SET_FIRST_LOAD };
};
