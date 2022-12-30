import { ActionType } from "./actionTypes";

const toggleMobileMenu = () => {
  return {
    type: ActionType.TOGGLE_MOB_MENU,
  };
};
const toggleColorMode = () => {
  return {
    type: ActionType.TOGGLE_COLOR_MODE,
  };
};

const changeSettingsStatus = (newStatus: boolean) => {
  return {
    type: ActionType.CHANGE_SETTINGS_STATUS,
    payload: newStatus,
  };
};

export { toggleMobileMenu, changeSettingsStatus, toggleColorMode };
