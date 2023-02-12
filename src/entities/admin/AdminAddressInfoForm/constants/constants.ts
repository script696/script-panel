import { VALIDATORS } from "../../../../shared/lib/constants/validators";
import { ProfileAddressField } from "../types/types";

export const VALIDATION_SCHEMA = {
	addressLine: VALIDATORS.addressLine,
	apartment: VALIDATORS.apartment,
	city: VALIDATORS.city,
	country: VALIDATORS.country,
};

export const ADDRESS_INFO_FORM_FIELDS_DATA: Array<ProfileAddressField> = [
	{ isFieldValueRequired: false, label: "Country", name: "country" },
	{ isFieldValueRequired: false, label: "City", name: "city" },
	{ isFieldValueRequired: false, label: "Address line", name: "addressLine" },
	{ isFieldValueRequired: false, label: "Apartment", name: "apartment" },
];
