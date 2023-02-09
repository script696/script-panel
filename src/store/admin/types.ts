import { UpdateAvatarDto } from "./adminDto/updateAvatarDto";
import { UpdateAddressInfoDto } from "./adminDto/updateAddressInfoDto";
import { UpdateBasicInfoDto } from "./adminDto/updateBasicInfoDto";

export type Admin = {
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
export type GetUserResponse = Admin;

export type UpdateAvatarResponse = Pick<Required<Admin>, "avatarUrl">;

export type UpdateBasicInfoResponse = Pick<
	Required<Admin>,
	"fullName" | "nickName" | "phoneNumber" | "dateOfBirth"
>;

export type UpdateAddressInfoResponse = Pick<
	Required<Admin>,
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
