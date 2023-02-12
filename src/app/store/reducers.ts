import { combineReducers } from "redux";

import AuthReducer from "./auth/reducer";
import UiReducer from "./ui/reducer";
import UserReducer from "./admin/reducer";
import RequestsReducer from "./requests/reducer";
import WidgetsReducer from "./widgets/reducer";

const rootReducer = combineReducers({
	AuthReducer,
	RequestsReducer,
	UiReducer,
	UserReducer,
	WidgetsReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
