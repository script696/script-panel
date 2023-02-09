import {
	SetAddressInfoPayload,
	SetAvatarPayload,
	SetBasicInfoPayload,
	SetUserPayload,
	UpdateAddressInfoPayload,
	UpdateAvatarPayload,
	UpdateBasicInfoPayload,
} from "./types";

export enum ActionType {
	SET_USER = "SET_USER",
	SET_AVATAR = "SET_AVATAR",
	SET_BASIC_INFO = "SET_BASIC_INFO",
	SET_ADDRESS_INFO = "SET_ADDRESS_INFO",
	GET_ADMIN = "GET_ADMIN",
	UPDATE_AVATAR = "UPDATE_AVATAR",
	UPDATE_BASIC_INFO = "UPDATE_BASIC_INFO",
	UPDATE_ADDRESS_INFO = "UPDATE_ADDRESS_INFO",
}

/* Redux action Types */
export type SetUser = {
	type: ActionType.SET_USER;
	payload: SetUserPayload;
};

export type SetBasicInfo = {
	type: ActionType.SET_BASIC_INFO;
	payload: SetBasicInfoPayload;
};

export type SetAddressInfo = {
	type: ActionType.SET_ADDRESS_INFO;
	payload: SetAddressInfoPayload;
};

export type SetAvatar = {
	type: ActionType.SET_AVATAR;
	payload: SetAvatarPayload;
};

/* Saga action Types */
export type UpdateBasicInfo = {
	type: ActionType.UPDATE_BASIC_INFO;
	payload: UpdateBasicInfoPayload;
};

export type UpdateAddressInfo = {
	type: ActionType.UPDATE_ADDRESS_INFO;
	payload: UpdateAddressInfoPayload;
};

export type UpdateAvatar = {
	type: ActionType.UPDATE_AVATAR;
	payload: UpdateAvatarPayload;
};

export type Actions = SetUser | SetAvatar | SetBasicInfo | SetAddressInfo;
