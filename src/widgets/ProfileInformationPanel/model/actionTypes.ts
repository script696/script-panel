export enum ActionType {
	TOGGLE_MODAL_INFO = "TOGGLE_MODAL_INFO",
}

export type ToggleModalInfo = {
	type: ActionType.TOGGLE_MODAL_INFO;
};

export type Actions = ToggleModalInfo;
