import $api from "../../api/api";
import { USER_ENDPOINTS } from "../../api/constants/api_endpoints";

import { UpdateBasicInfoDto } from "./userDto/updateBasicInfoDto";
import { UpdateAddressInfoDto } from "./userDto/updateAddressInfoDto";
import { UpdateAvatarDto } from "./userDto/updateAvatarDto";
import {
	GetUserResponse,
	UpdateAddressInfoResponse,
	UpdateAvatarResponse,
	UpdateBasicInfoResponse,
} from "./types";

class User {
	static fetchGetUser(): Promise<GetUserResponse> {
		return $api.get(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.GET_USER}`);
	}

	static fetchUpdateAvatar(data: UpdateAvatarDto): Promise<UpdateAvatarResponse> {
		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_AVATAR}`, data, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	}

	static fetchUpdateBasicInfo(data: UpdateBasicInfoDto): Promise<UpdateBasicInfoResponse> {
		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_BASIC_INFO}`, data);
	}

	static fetchUpdateAddressInfo(data: UpdateAddressInfoDto): Promise<UpdateAddressInfoResponse> {
		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_ADDRESS_INFO}`, data);
	}
}

export default User;
