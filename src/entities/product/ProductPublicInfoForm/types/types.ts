export type PublicInfoForm = {
	price: string;
	discount: string;
};

export type PublicInfoField = {
	label: string;
	name: keyof PublicInfoForm;
	isFieldValueRequired: boolean;
};
