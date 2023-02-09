import $api from "../../api/api";
import { USER_ENDPOINTS } from "../../api/constants/api_endpoints";

import { UpdateUserDto } from "./userDto/userDto";
import { UpdateBasicInfoDto } from "./userDto/updateBasicInfoDto";
import { UpdateAddressInfoDto } from "./userDto/updateAddressInfoDto";

class User {
	static fetchGetUser() {
		return $api.get(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.GET_USER}`);
	}

	static fetchUpdateUser(userData: UpdateUserDto) {
		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_USER}`, userData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	}

	static fetchUpdateAvatar(avatar: any) {
		const test = { avatar: avatar };

		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_AVATAR}`, test, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	}

	static fetchUpdateBasicInfo(data: UpdateBasicInfoDto): any {
		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_BASIC_INFO}`, data);
	}

	static fetchUpdateAddressInfo(data: UpdateAddressInfoDto) {
		return $api.put(`${USER_ENDPOINTS.BASE}/${USER_ENDPOINTS.UPDATE_ADDRESS_INFO}`, data);
	}
}

export default User;
