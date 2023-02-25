import * as Yup from "yup";

import { ERRORS } from "../../../utils/errors/errors";

import { passwordRegExp } from "./regExp";

export const SUPPORTED_PICTURE_FORMATS = ["jpeg"];

export const VALIDATORS = {
	addressLine: Yup.string().min(3).max(30),
	amount: Yup.number(),
	apartment: Yup.string().min(3).max(30),
	city: Yup.string().min(3).max(30),
	country: Yup.string().min(3).max(30),
	discount: Yup.number().min(0).max(100),
	email: Yup.string().email().required(),
	fullName: Yup.string().min(4).max(10),
	productDescription: Yup.string(),
	newPasswordPassword: Yup.string().when("newPassword", {
		is: (val: string) => !!val,
		then: Yup.string().oneOf([Yup.ref("newPassword")], "Both password need to be the same"),
	}),
	productTitle: Yup.string(),
	nickName: Yup.string().min(4).max(10).required(),
	password: Yup.string().matches(passwordRegExp, ERRORS.password).required(),
	passwordRepeat: Yup.string().when("password", {
		is: (val: string) => !!val,
		then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same"),
	}),
	phoneNumber: Yup.string().min(7).max(15),
	price: Yup.number(),
	totalSold: Yup.number(),
};
