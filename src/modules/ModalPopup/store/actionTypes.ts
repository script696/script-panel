export enum ActionType {
	SET_IS_MODAL_POPUP_OPEN = "SET_IS_MODAL_POPUP_OPEN",
}

export type SetIsModalPopupOpen = {
	type: ActionType.SET_IS_MODAL_POPUP_OPEN;
	payload: boolean;
};

export type Actions = SetIsModalPopupOpen;
