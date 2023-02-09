const BASE_URL = "http://localhost:5000";

const AUTH_ENDPOINTS = {
	BASE: "auth",
	CHANGE_PASSWORD: "changePassword",
	REFRESH: "refresh",
	SIGNIN: "signin",
	SIGNOUT: "sign-out",
	SIGNUP: "signup",
};

const USER_ENDPOINTS = {
	BASE: "admin",
	GET_ADMIN: "getUser",
	UPDATE_ADDRESS_INFO: "updateAddressInfo",
	UPDATE_AVATAR: "updateAvatar",
	UPDATE_BASIC_INFO: "updateBasicInfo",
	UPDATE_USER: "updateUser",
};

export { BASE_URL, AUTH_ENDPOINTS, USER_ENDPOINTS };
