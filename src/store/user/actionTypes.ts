import { UpdateUserDto } from "./userDto/userDto";
import { UpdateBasicInfoDto } from "./userDto/updateBasicInfoDto";
import { User } from "./types";
import { UpdateAddressInfoDto } from "./userDto/updateAddressInfoDto";

export enum ActionType {
	SET_USER = "SET_USER",
	SET_AVATAR = "SET_AVATAR",
	SET_BASIC_INFO = "SET_BASIC_INFO",
	SET_ADDRESS_INFO = "SET_ADDRESS_INFO",
	GET_USER = "GET_USER",
	UPDATE_USER = "UPDATE_USER",
	UPDATE_AVATAR = "UPDATE_AVATAR",
	UPDATE_BASIC_INFO = "UPDATE_BASIC_INFO",
	UPDATE_ADDRESS_INFO = "UPDATE_ADDRESS_INFO",
}

export type UpdateAvatarPayload = {
	onCloseModal: () => void;
	avatar: File;
};

export type UpdateAddressInfoPayload = {
	onCloseModal: () => void;
	data: UpdateAddressInfoDto;
};

export type UpdateBasicInfoPayload = {
	onCloseModal: () => void;
	data: UpdateBasicInfoDto;
};

//////////////////////////////////////////////////////////////
export type SetUser = {
	type: ActionType.SET_USER;
	payload: User;
};

export type UpdateUser = {
	type: ActionType.UPDATE_USER;
	payload: UpdateUserDto;
};

export type UpdateBasicInfo = {
	type: ActionType.UPDATE_BASIC_INFO;
	payload: UpdateBasicInfoPayload;
};

export type UpdateAddressInfo = {
	type: ActionType.UPDATE_ADDRESS_INFO;
	payload: UpdateAddressInfoPayload;
};

export type SetBasicInfo = {
	type: ActionType.SET_BASIC_INFO;
	payload: UpdateBasicInfoDto;
};

export type SetAddressInfo = {
	type: ActionType.SET_ADDRESS_INFO;
	payload: UpdateAddressInfoDto;
};

export type SetAvatar = {
	type: ActionType.SET_AVATAR;
	payload: string;
};

export type UpdateAvatar = {
	type: ActionType.UPDATE_AVATAR;
	payload: UpdateAvatarPayload;
};

export type Actions = SetUser | SetAvatar | SetBasicInfo | SetAddressInfo;
