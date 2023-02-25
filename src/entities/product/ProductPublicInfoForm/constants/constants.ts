import { VALIDATORS } from "shared/lib/constants/validators";

import { PublicInfoField } from "../types/types";

export const VALIDATION_SCHEMA = {
	discount: VALIDATORS.productDiscount,
	price: VALIDATORS.productPrice,
};

export const PUBLIC_INFO_FORM_FIELDS_DATA: Array<PublicInfoField> = [
	{ isFieldValueRequired: false, label: "Price", name: "price" },
	{ isFieldValueRequired: false, label: "Discount", name: "discount" },
];
