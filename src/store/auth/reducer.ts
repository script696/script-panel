import { Actions, ActionType } from "./actionTypes";

const initialState = {
  isLoading: false,
  isFirstLoad: true,
  error: "",
  isUserAuth: false,
};

const AuthReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.LOADING:
      state = {
        ...state,
        isLoading: action.payload,
      };
      break;
    case ActionType.FIRST_LOAD:
      state = {
        ...state,
        isFirstLoad: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
export default AuthReducer;
