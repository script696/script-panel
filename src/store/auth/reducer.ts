import { Actions, ActionType } from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
  isUserAuth: false,
};

const LoginReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.PENDING:
      state = {
        ...state,
        loading: true,
      };
      break;
    case ActionType.SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case ActionType.LOGIN_SUCCESS:
      state = {
        ...state,
        isUserAuth: true,
        loading: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
export default LoginReducer;
