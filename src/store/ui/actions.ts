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
    type: ActionType.CHANGE_SETTINGS_STATUS,
    payload: newStatus,
  };
};

export const openSnackBar = (payload: OpenSnackBarPayload) => {
  return {
    type: ActionType.OPEN_SNACKBAR,
    payload,
  };
};

export const closeSnackBar = () => {
  return {
    type: ActionType.CLOSE_SNACKBAR,
  };
};
