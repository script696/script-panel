import { combineReducers } from "redux";

import { ModalPopupReducer } from "../modules/ModalPopup";

import AuthReducer from "./auth/reducer";
import UiReducer from "./ui/reducer";
import UserReducer from "./user/reducer";
import RequestsReducer from "./requests/reducer";

const rootReducer = combineReducers({
	AuthReducer,
	ModalPopupReducer,
	RequestsReducer,
	UiReducer,
	UserReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
