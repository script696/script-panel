import $api from "../../../shared/api/api";
import { USER_ENDPOINTS } from "../../../shared/api/constants/api_endpoints";

import { UpdateBasicInfoDto } from "./adminDto/updateBasicInfoDto";
import { UpdateAddressInfoDto } from "./adminDto/updateAddressInfoDto";
import { UpdateAvatarDto } from "./adminDto/updateAvatarDto";
import {
	GetUserResponse,
	UpdateAddressInfoResponse,
	UpdateAvatarResponse,
	UpdateBasicInfoResponse,
} from "./types";

class Admin {
	static fetchGetAdmin(): Promise<GetUserResponse> {
		return $api.get(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.GET_ADMIN}?role=admin`);
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

export default Admin;
