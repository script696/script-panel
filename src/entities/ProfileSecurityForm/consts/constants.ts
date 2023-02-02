import { ProfileSecurityField } from "../types/types";

export const PROFILE_SECURITY_FIELDS_DATA: Array<ProfileSecurityField> = [
	{
		isFieldValueRequired: true,
		label: "Old Password",
		name: "oldPassword",
		title: "Please, enter your old password ",
	},
	{
		isFieldValueRequired: true,
		label: "New Password",
		name: "newPassword",
		title: "Please, enter your new password ",
	},
	{
		isFieldValueRequired: true,
		label: "Repeat New Password",
		name: "repeatPassword",
		title: "Please, repeat your new password ",
	},
];
