import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import SettingsReducer from "./settings/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  SettingsReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
