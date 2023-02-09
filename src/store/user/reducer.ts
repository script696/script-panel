import defaultAvatar3 from "../../assets/img/avatars/defaultAvatar3.png";

import { BASE_URL } from "../../api/constants/api_endpoints";

import { Actions, ActionType } from "./actionTypes";

type InitialState = {
	avatarUrl: string;
	dateOfBirth: string;
	email: string;
	fullName: string;
	nickName: string;
	phoneNumber: string;
	role: string;
	country: string;
	city: string;
	addressLine: string;
	apartment: string;
};
const initialState: InitialState = {
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

const UserReducer = (state = initialState, action: Actions) => {
	switch (action.type) {
		case ActionType.SET_USER:
			state = {
				...state,
				addressLine: action.payload.addressLine ?? "",
				apartment: action.payload.apartment ?? "",
				avatarUrl: action.payload.avatarUrl ? `${BASE_URL}/${action.payload.avatarUrl}` : defaultAvatar3,
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
				avatarUrl: `${BASE_URL}/${action.payload}`,
			};
			break;
		case ActionType.SET_BASIC_INFO:
			state = {
				...state,
				dateOfBirth: action.payload.fullName ?? "",
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

export default UserReducer;
