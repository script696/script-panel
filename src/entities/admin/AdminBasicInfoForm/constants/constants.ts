import { VALIDATORS } from "../../../../shared/lib/constants/validators";
import { BasicInfoFormField } from "../types/types";

export const VALIDATION_SCHEMA = {
	fullName: VALIDATORS.fullName,
	nickName: VALIDATORS.nickName,
	phoneNumber: VALIDATORS.phoneNumber,
};

export const ADDRESS_INFO_FORM_FIELDS_DATA: Array<BasicInfoFormField> = [
	{ isFieldValueRequired: true, label: "NickName", name: "nickName" },
	{ isFieldValueRequired: false, label: "Full Name", name: "fullName" },
	{ isFieldValueRequired: false, label: "Phone Number", name: "phoneNumber" },
];
