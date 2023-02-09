import { Actions, ActionType } from "./actionTypes";

const initialState = {
	isUserAuth: false,
};

const AuthReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.SET_AUTH:
			state = {
				...state,
				isUserAuth: action.payload,
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};
export default AuthReducer;
