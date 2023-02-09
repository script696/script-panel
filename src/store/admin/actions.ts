import { ActionType } from "./actionTypes";
import {
	SetUserPayload,
	UpdateAddressInfoPayload,
	UpdateAvatarPayload,
	UpdateBasicInfoPayload,
} from "./types";
import { UpdateAddressInfoResponse, UpdateAvatarResponse, UpdateBasicInfoResponse } from "./types";

/* Redux actions */
export const setUser = (payload: SetUserPayload) => {
	return { payload, type: ActionType.SET_USER };
};

export const setAvatar = (payload: UpdateAvatarResponse) => {
	return { payload, type: ActionType.SET_AVATAR };
};

export const setBasicInfo = (payload: UpdateBasicInfoResponse) => {
	return { payload, type: ActionType.SET_BASIC_INFO };
};

export const setAddressInfo = (payload: UpdateAddressInfoResponse) => {
	return { payload, type: ActionType.SET_ADDRESS_INFO };
};

/* Saga actions */
export const getAdmin = () => {
	return { type: ActionType.GET_ADMIN };
};

export const updateAvatar = (payload: UpdateAvatarPayload) => {
	return { payload, type: ActionType.UPDATE_AVATAR };
};

export const updateBasicInfo = (payload: UpdateBasicInfoPayload) => {
	return { payload, type: ActionType.UPDATE_BASIC_INFO };
};

export const updateAddressInfo = (payload: UpdateAddressInfoPayload) => {
	return { payload, type: ActionType.UPDATE_ADDRESS_INFO };
};
