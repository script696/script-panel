export enum ActionType {
  TOGGLE_MOB_MENU = "TOGGLE_MOB_MENU",
  CHANGE_SETTINGS_STATUS = "CHANGE_SETTINGS_STATUS",
  TOGGLE_COLOR_MODE = "TOGGLE_COLOR_MODE",
  OPEN_SNACKBAR = "OPEN_SNACKBAR",
  CLOSE_SNACKBAR = "CLOSE_SNACKBAR",
}

export type OpenSnackBarPayload = {
  message: string;
  snackBarType: "success" | "error";
};

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

export type OpenSnackBar = {
  type: ActionType.OPEN_SNACKBAR;
  payload: OpenSnackBarPayload;
};

export type CloseSnackBar = {
  type: ActionType.CLOSE_SNACKBAR;
};

export type Actions =
  | ToggleMobileMenu
  | ChangeSettingsStatus
  | ToggleColorMode
  | OpenSnackBar
  | CloseSnackBar;
