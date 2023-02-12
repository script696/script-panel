import { Actions, ActionType } from "./actionTypes";
import { ColorMode } from "./types";

const initialState = {
	colorMode: (localStorage.getItem("dashboardTheme") as ColorMode) ?? "dark",
	isSettingsSidebarOpen: false,
};

const WidgetsReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.TOGGLE_SETTINGS_SIDEBAR:
			state = {
				...state,
				isSettingsSidebarOpen: action.payload,
			};
			break;
		case ActionType.TOGGLE_COLOR_MODE:
			const colorMode = state.colorMode === "dark" ? "light" : "dark";
			state = {
				...state,
				colorMode: (state.colorMode = colorMode),
			};
			localStorage.setItem("dashboardTheme", colorMode);
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};

export default WidgetsReducer;
