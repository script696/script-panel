import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import SettingsReducer from "./settings/reducer";
import UserReducer from "./user/reducer";
import RequestsReducer from "./requests/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  SettingsReducer,
  UserReducer,
  RequestsReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
