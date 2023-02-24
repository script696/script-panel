import { combineReducers } from "redux";

import AuthReducer from "./auth/reducer";
import UiReducer from "./ui/reducer";
import RequestsReducer from "./requests/reducer";
import WidgetsReducer from "./widgets/reducer";
import AdminReducer from "./admin/reducer";
import ProductsReducer from "./products/reducer";

const rootReducer = combineReducers({
	AdminReducer,
	AuthReducer,
	ProductsReducer,
	RequestsReducer,
	UiReducer,
	WidgetsReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
