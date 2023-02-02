import {
	ActionType,
	UpdateAddressInfoPayload,
	UpdateAvatarPayload,
	UpdateBasicInfoPayload,
} from "./actionTypes";
import { UpdateUserDto } from "./userDto/userDto";
import { User } from "./types";
import { UpdateBasicInfoDto } from "./userDto/updateBasicInfoDto";
import { UpdateAddressInfoDto } from "./userDto/updateAddressInfoDto";

export const getUser = () => {
	return { type: ActionType.GET_USER };
};

export const setUser = (userData: User) => {
	return { payload: userData, type: ActionType.SET_USER };
};

export const updateUser = (userData: UpdateUserDto) => {
	return { payload: userData, type: ActionType.UPDATE_USER };
};

export const updateAvatar = (data: UpdateAvatarPayload) => {
	return { payload: data, type: ActionType.UPDATE_AVATAR };
};

export const setAvatar = (avatar: string) => {
	return { payload: avatar, type: ActionType.SET_AVATAR };
};

export const handleUpdateBasicInfo = (data: UpdateBasicInfoPayload) => {
	return { payload: data, type: ActionType.UPDATE_BASIC_INFO };
};

export const handleUpdateAddressInfo = (data: UpdateAddressInfoPayload) => {
	return { payload: data, type: ActionType.UPDATE_ADDRESS_INFO };
};

export const setBasicInfo = (data: UpdateBasicInfoDto) => {
	return { payload: data, type: ActionType.SET_BASIC_INFO };
};

export const setAddressInfo = (data: UpdateAddressInfoDto) => {
	return { payload: data, type: ActionType.SET_ADDRESS_INFO };
};

export const toggleProfileEditeMode = () => {
	return { type: ActionType.TOGGLE_PROFILE_EDIT_MODE };
};
