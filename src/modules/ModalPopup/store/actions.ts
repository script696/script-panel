import { ActionType } from "./actionTypes";

export const setIsModalPopupOpen = (isModalPopupOpen: boolean) => {
	return { payload: isModalPopupOpen, type: ActionType.SET_IS_MODAL_POPUP_OPEN };
};
