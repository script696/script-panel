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
	ADD_PICTURE: "addPicture",
	BASE: "product",
	CREATE_PRODUCT: "create",
	DELETE_PRODUCT: "deleteProduct",
	GET_ALL: "getAll",
	REMOVE_PICTURE: "removeProductPicture",
	UPDATE_DESCRIPTION: "updateDescription",
	UPDATE_PUBLIC_INFO: "updatePublicInfo",
	UPDATE_SERVICE_INFO: "updateServiceInfo",
};

export { AUTH_ENDPOINTS, USER_ENDPOINTS, PRODUCTS_ENDPOINTS };
