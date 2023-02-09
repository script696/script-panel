import * as Yup from "yup";

import { passwordRegExp } from "../regExp/regExp";
import { ERRORS } from "../errors/errors";

export const SUPPORTED_PICTURE_FORMATS = ["jpeg"];

export const VALIDATORS = {
	addressLine: Yup.string().min(3).max(30),
	apartment: Yup.string().min(3).max(30),
	city: Yup.string().min(3).max(30),
	country: Yup.string().min(3).max(30),
	email: Yup.string().email().required(),
	fullName: Yup.string().min(4).max(10),
	nickName: Yup.string().min(4).max(10).required(),
	password: Yup.string().matches(passwordRegExp, ERRORS.password).required(),
	phoneNumber: Yup.string().min(7).max(15),
	repeatPassword: Yup.string().when("newPassword", {
		is: (val: string) => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref("newPassword")], "Both password need to be the same"),
	}),
};
