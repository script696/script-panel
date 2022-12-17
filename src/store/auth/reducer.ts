import { Actions, ActionType } from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
  value: 0,
};

const LoginReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      console.log("here im reducer");
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
