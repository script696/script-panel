import { UpdateAvatarDto } from "./userDto/updateAvatarDto";
import { UpdateAddressInfoDto } from "./userDto/updateAddressInfoDto";
import { UpdateBasicInfoDto } from "./userDto/updateBasicInfoDto";

export type User = {
	nickName: string;
	email: string;
	role: string;
	avatarUrl?: string;
	fullName?: string;
	dateOfBirth?: string;
	phoneNumber?: string;
	apartment?: string;
	country?: string;
	city?: string;
	addressLine?: string;
};

/* Responses*/
export type GetUserResponse = User;

export type UpdateAvatarResponse = Pick<Required<User>, "avatarUrl">;

export type UpdateBasicInfoResponse = Pick<
	Required<User>,
	"fullName" | "nickName" | "phoneNumber" | "dateOfBirth"
>;

export type UpdateAddressInfoResponse = Pick<
	Required<User>,
	"country" | "city" | "addressLine" | "apartment"
>;

/* Payloads */
export type UpdateAvatarPayload = {
	onCloseModal: () => void;
	data: UpdateAvatarDto;
};

export type UpdateAddressInfoPayload = {
	onCloseModal: () => void;
	data: UpdateAddressInfoDto;
};

export type UpdateBasicInfoPayload = {
	onCloseModal: () => void;
	data: UpdateBasicInfoDto;
};

export type SetUserPayload = GetUserResponse;

export type SetBasicInfoPayload = UpdateBasicInfoResponse;

export type SetAddressInfoPayload = UpdateAddressInfoResponse;

export type SetAvatarPayload = UpdateAvatarResponse;
