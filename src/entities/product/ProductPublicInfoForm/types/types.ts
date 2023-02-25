export type PublicInfoForm = {
	price: number;
	discount: number;
};

export type PublicInfoField = {
	label: string;
	name: keyof PublicInfoForm;
	isFieldValueRequired: boolean;
};
