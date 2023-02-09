import { ActionType, OpenSnackBarPayload } from "./actionTypes";

export const toggleMobileMenu = () => {
  return {
    type: ActionType.TOGGLE_MOB_MENU,
  };
};
export const toggleColorMode = () => {
  return {
    type: ActionType.TOGGLE_COLOR_MODE,
  };
};

export const changeSettingsStatus = (newStatus: boolean) => {
  return {
    payload: newStatus,
    type: ActionType.CHANGE_SETTINGS_STATUS,
  };
};

export const openSnackBar = (payload: OpenSnackBarPayload) => {
  return {
    payload,
    type: ActionType.OPEN_SNACKBAR,
  };
};

export const closeSnackBar = () => {
  return {
    type: ActionType.CLOSE_SNACKBAR,
  };
};
