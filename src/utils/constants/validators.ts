import * as Yup from "yup";

export const VALIDATORS = {
	addressLine: Yup.string().min(3).max(30),
	apartment: Yup.string().min(3).max(30),
	city: Yup.string().min(3).max(30),
	country: Yup.string().min(3).max(30),
	email: Yup.string().email().required(),
	fullName: Yup.string().min(4).max(10),
	nickName: Yup.string().min(4).max(10).required(),
	phoneNumber: Yup.string().min(7).max(15),
};
