import { ActionType } from "./actionTypes";
import {
	SetUserPayload,
	UpdateAddressInfoPayload,
	UpdateAvatarPayload,
	UpdateBasicInfoPayload,
} from "./types";
import { UpdateAddressInfoResponse, UpdateAvatarResponse, UpdateBasicInfoResponse } from "./types";

/* Redux actions */
export const setUser = (userData: SetUserPayload) => {
	return { payload: userData, type: ActionType.SET_USER };
};

export const setAvatar = (avatar: UpdateAvatarResponse) => {
	return { payload: avatar, type: ActionType.SET_AVATAR };
};

export const setBasicInfo = (data: UpdateBasicInfoResponse) => {
	return { payload: data, type: ActionType.SET_BASIC_INFO };
};

export const setAddressInfo = (data: UpdateAddressInfoResponse) => {
	return { payload: data, type: ActionType.SET_ADDRESS_INFO };
};

/* Saga actions */
export const getUser = () => {
	return { type: ActionType.GET_USER };
};

export const updateAvatar = (data: UpdateAvatarPayload) => {
	return { payload: data, type: ActionType.UPDATE_AVATAR };
};

export const updateBasicInfo = (data: UpdateBasicInfoPayload) => {
	return { payload: data, type: ActionType.UPDATE_BASIC_INFO };
};

export const updateAddressInfo = (data: UpdateAddressInfoPayload) => {
	return { payload: data, type: ActionType.UPDATE_ADDRESS_INFO };
};
