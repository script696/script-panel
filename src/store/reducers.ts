import { combineReducers } from "redux";
import LoginReducer from "./auth/reducer";
// Front

const rootReducer = combineReducers({
  LoginReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
