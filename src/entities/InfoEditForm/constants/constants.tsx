import { ProfileAddressField, ProfileInfoField } from "../types/types";

export const PROFILE_INFO_FIELDS_DATA: Array<ProfileInfoField> = [
	{ isFieldValueRequired: true, label: "NickName", name: "nickName" },
	{ isFieldValueRequired: false, label: "Full Name", name: "fullName" },
	{ isFieldValueRequired: false, label: "Phone Number", name: "phoneNumber" },
];

export const PROFILE_ADDRESS_FIELDS_DATA: Array<ProfileAddressField> = [
	{ isFieldValueRequired: false, label: "Country", name: "country" },
	{ isFieldValueRequired: false, label: "City", name: "city" },
	{ isFieldValueRequired: false, label: "Address line", name: "addressLine" },
	{ isFieldValueRequired: false, label: "Apartment", name: "apartment" },
];

export const SLIDE_LABELS = {
	profileAddressSlide: "Address Info",
	profileInfoSlide: "General Info",
};
