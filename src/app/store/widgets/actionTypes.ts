import { ToggleSettingsSidebarPayload } from "./types";

export enum ActionType {
	TOGGLE_SETTINGS_SIDEBAR = "TOGGLE_SETTINGS_SIDEBAR",
	TOGGLE_COLOR_MODE = "TOGGLE_COLOR_MODE",
}

/* Redux action Types */
export type ToggleSettingsSidebar = {
	type: ActionType.TOGGLE_SETTINGS_SIDEBAR;
	payload: ToggleSettingsSidebarPayload;
};

export type ToggleColorMode = {
	type: ActionType.TOGGLE_COLOR_MODE;
};

export type Actions = ToggleSettingsSidebar | ToggleColorMode;
