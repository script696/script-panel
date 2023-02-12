import { VALIDATORS } from "../../../../shared/lib/constants/validators";

export const INITIAL_FORM_VALUES = {
	email: "",
	nickName: "",
	password: "",
	passwordRepeat: "",
	role: "admin",
};

export const VALIDATION_SCHEMA = {
	email: VALIDATORS.email,
	nickName: VALIDATORS.nickName,
	password: VALIDATORS.password,
	passwordRepeat: VALIDATORS.passwordRepeat,
};
