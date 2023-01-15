import { Actions, ActionType } from "./actionTypes";

type ColorMode = "dark" | "light";

type SnackBar = {
  isSnackBarOpen: boolean;
  snackBarMessage: string;
  snackBarType: "success" | "error" | undefined;
};

type InitialState = {
  isMobileMenuOpen: boolean;
  isSettingsOpen: boolean;
  colorMode: ColorMode;
  snackBar: SnackBar;
};

const defaultSnackBarState: SnackBar = {
  isSnackBarOpen: false,
  snackBarMessage: "",
  snackBarType: undefined,
};

const initialState: InitialState = {
  isMobileMenuOpen: false,
  isSettingsOpen: false,
  colorMode: (localStorage.getItem("dashboardTheme") as ColorMode) ?? "dark",
  snackBar: defaultSnackBarState,
};

const UiReducer = (state = initialState, action: Actions) => {
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
    case ActionType.OPEN_SNACKBAR:
      state = {
        ...state,
        snackBar: {
          isSnackBarOpen: true,
          snackBarMessage: action.payload.message,
          snackBarType: action.payload.snackBarType,
        },
      };
      break;
    case ActionType.CLOSE_SNACKBAR:
      state = {
        ...state,
        snackBar: {
          isSnackBarOpen: false,
          snackBarMessage: "",
          snackBarType: state.snackBar.snackBarType,
        },
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UiReducer;
