import { ActionType } from "./actionTypes";

export const toggleModalInfoOpen = (isModalInfoOpen: boolean) => {
	return { payload: isModalInfoOpen, type: ActionType.TOGGLE_MODAL_INFO };
};
