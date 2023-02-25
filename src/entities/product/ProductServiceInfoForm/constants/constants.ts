import { VALIDATORS } from "shared/lib/constants/validators";

import { ServiceInfoField } from "../types/types";

export const VALIDATION_SCHEMA = {
	amount: VALIDATORS.amount,
	totalSold: VALIDATORS.totalSold,
};

export const SERVICE_INFO_FORM_FIELDS_DATA: Array<ServiceInfoField> = [
	{ isFieldValueRequired: false, label: "Id", name: "id" },
	{ isFieldValueRequired: false, label: "Amount", name: "amount" },
	{ isFieldValueRequired: false, label: "Total Sold", name: "totalSold" },
];
