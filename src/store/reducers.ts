import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import UiReducer from "./ui/reducer";
import UserReducer from "./user/reducer";
import RequestsReducer from "./requests/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  UiReducer,
  UserReducer,
  RequestsReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
