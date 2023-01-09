import { Actions, ActionType } from "./actionTypes";

const initialState = {
  isLoading: false,
  isFirstLoad: true,
  errorMessage: "",
};

const RequestsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      state = {
        ...state,
        isLoading: action.payload,
      };
      break;
    case ActionType.SET_FIRST_LOAD:
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
export default RequestsReducer;
