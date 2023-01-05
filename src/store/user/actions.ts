import { ActionType } from "./actionTypes";
import { UserDto } from "./models/userModel";

const setLoading = (isLoading: boolean) => {
  return { type: ActionType.LOADING, payload: isLoading };
};

const getUser = () => {
  return { type: ActionType.GET_USER };
};

const setUser = (userData: UserDto) => {
  return { type: ActionType.SET_USER, payload: userData };
};

export { setLoading, getUser, setUser };
