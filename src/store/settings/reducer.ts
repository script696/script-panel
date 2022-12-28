import { Actions, ActionType } from "./actionTypes";

const initialState = {
  isMobileMenuOpen: false,
};

const SettingsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.TOGGLE_MOB_MENU:
      state = {
        ...state,
        isMobileMenuOpen: !state.isMobileMenuOpen,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default SettingsReducer;
