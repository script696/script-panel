import { Actions, ActionType } from "./actionTypes";

const initialState = {
	isModalPopupOpen: false,
};

const ModalPopupReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.SET_IS_MODAL_POPUP_OPEN:
			state = {
				...state,
				isModalPopupOpen: action.payload,
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};
export default ModalPopupReducer;
