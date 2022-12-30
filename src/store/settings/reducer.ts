import { Actions, ActionType } from "./actionTypes";

type ColorMode = "dark" | "light";

type InitialState = {
  isMobileMenuOpen: boolean;
  isSettingsOpen: boolean;
  colorMode: ColorMode;
};

const initialState: InitialState = {
  isMobileMenuOpen: false,
  isSettingsOpen: false,
  colorMode: (localStorage.getItem("dashboardTheme") as ColorMode) ?? "dark",
};

const SettingsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.TOGGLE_MOB_MENU:
      state = {
        ...state,
        isMobileMenuOpen: !state.isMobileMenuOpen,
      };
      break;
    case ActionType.CHANGE_SETTINGS_STATUS:
      state = {
        ...state,
        isSettingsOpen: action.payload,
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

export default SettingsReducer;
