import defaultAvatar3 from "../../assets/img/avatars/defaultAvatar3.png";

import { Actions, ActionType } from "./actionTypes";
import { Admin } from "./types";

const initialState: Required<Admin> = {
	addressLine: "",
	apartment: "",
	avatarUrl: defaultAvatar3,
	city: "",
	country: "",
	dateOfBirth: "",
	email: "",
	fullName: "",
	nickName: "",
	phoneNumber: "",
	role: "",
};
const AdminReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.SET_USER:
			state = {
				...state,
				addressLine: action.payload.addressLine ?? "",
				apartment: action.payload.apartment ?? "",
				avatarUrl: action.payload.avatarUrl
					? `${process.env.REACT_APP_API_URL}/${action.payload.avatarUrl}`
					: defaultAvatar3,
				city: action.payload.city ?? "",
				country: action.payload.country ?? "",
				dateOfBirth: action.payload.dateOfBirth ?? "",
				email: action.payload.email,
				fullName: action.payload.fullName ?? "",
				nickName: action.payload.nickName,
				phoneNumber: action.payload.phoneNumber ?? "",
				role: action.payload.role,
			};
			break;
		case ActionType.SET_AVATAR:
			state = {
				...state,
				avatarUrl: `${process.env.REACT_APP_API_URL}/${action.payload.avatarUrl}`,
			};
			break;
		case ActionType.SET_BASIC_INFO:
			state = {
				...state,
				dateOfBirth: action.payload.dateOfBirth ?? "",
				fullName: action.payload.fullName ?? "",
				nickName: action.payload.nickName,
				phoneNumber: action.payload.phoneNumber ?? "",
			};
			break;
		case ActionType.SET_ADDRESS_INFO:
			state = {
				...state,
				addressLine: action.payload.addressLine ?? "",
				apartment: action.payload.apartment ?? "",
				city: action.payload.city ?? "",
				country: action.payload.country ?? "",
			};
			break;
		default:
			state = { ...state };
			break;
	}
	return state;
};

export default AdminReducer;
