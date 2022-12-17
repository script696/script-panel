import { Actions, ActionType } from "./actionTypes";

const initialState = {
  loading: true,
  error: "",
};

const LoginReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
export default LoginReducer;
