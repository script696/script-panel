export enum ActionType {
  TOGGLE_MOB_MENU = "TOGGLE_MOB_MENU",
  CHANGE_SETTINGS_STATUS = "CHANGE_SETTINGS_STATUS",
  TOGGLE_COLOR_MODE = "TOGGLE_COLOR_MODE",
}

export type ToggleMobileMenu = {
  type: ActionType.TOGGLE_MOB_MENU;
};

export type ChangeSettingsStatus = {
  type: ActionType.CHANGE_SETTINGS_STATUS;
  payload: boolean;
};

export type ToggleColorMode = {
  type: ActionType.TOGGLE_COLOR_MODE;
};

export type Actions = ToggleMobileMenu | ChangeSettingsStatus | ToggleColorMode;
