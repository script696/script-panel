const BASE_URL = process.env.REACT_APP_BASE_URL;

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

const PRODUCTS_ENDPOINTS = {
	BASE: "product",
	GET_ALL: "getAll",
};

export { BASE_URL, AUTH_ENDPOINTS, USER_ENDPOINTS, PRODUCTS_ENDPOINTS };
