import { VALIDATORS } from "shared/lib/constants/validators";

import { ServiceInfoField } from "../types/types";

export const VALIDATION_SCHEMA = {
	description: VALIDATORS.productDescription,
	title: VALIDATORS.productTitle,
};

export const DESCRIPTION_INFO_FORM_FIELDS_DATA: Array<ServiceInfoField> = [
	{ isFieldValueRequired: true, label: "Title", name: "title" },
	{ isFieldValueRequired: true, label: "Description", name: "description" },
];
