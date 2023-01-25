import { Actions, ActionType } from "./actionTypes";

const initialState = {
	isModalInfoOpen: false,
};

const ProfileInformationPanelReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.TOGGLE_MODAL_INFO:
			state = {
				...state,
				isModalInfoOpen: (state.isModalInfoOpen = !state.isModalInfoOpen),
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};
export default ProfileInformationPanelReducer;
