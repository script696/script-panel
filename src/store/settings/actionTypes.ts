export enum ActionType {
  TOGGLE_MOB_MENU = "TOGGLE_MOB_MENU",
}

export type ToggleMobileMenu = {
  type: ActionType.TOGGLE_MOB_MENU;
};

export type Actions = ToggleMobileMenu;
