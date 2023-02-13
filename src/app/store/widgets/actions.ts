import { ToggleSettingsSidebarPayload } from "./types";
import { ActionType } from "./actionTypes";

export const toggleSettingsSidebar = (isSidebarOpen: ToggleSettingsSidebarPayload) => {
	return {
		payload: isSidebarOpen,
		type: ActionType.TOGGLE_SETTINGS_SIDEBAR,
	};
};

export const toggleColorMode = () => {
	return {
		type: ActionType.TOGGLE_COLOR_MODE,
	};
};
