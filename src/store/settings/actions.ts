import { ActionType } from "./actionTypes";

const toggleMobileMenu = () => {
  return {
    type: ActionType.TOGGLE_MOB_MENU,
  };
};

export { toggleMobileMenu };
