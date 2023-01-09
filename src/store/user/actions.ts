import { ActionType } from "./actionTypes";
import { UpdateUserDto, UserDto } from "./models/userModel";

const setLoading = (isLoading: boolean) => {
  return { type: ActionType.LOADING, payload: isLoading };
};

const getUser = () => {
  return { type: ActionType.GET_USER };
};

const setUser = (userData: UserDto) => {
  return { type: ActionType.SET_USER, payload: userData };
};

const updateUser = (userData: UpdateUserDto) => {
  return { type: ActionType.UPDATE_USER, payload: userData };
};

const toggleProfileEditeMode = () => {
  return { type: ActionType.TOGGLE_PROFILE_EDIT_MODE };
};

export { setLoading, getUser, setUser, updateUser, toggleProfileEditeMode };
