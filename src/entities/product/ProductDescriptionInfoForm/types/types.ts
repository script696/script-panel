export type DescriptionInfoForm = {
	title: string;
	description: string;
};

export type ServiceInfoField = {
	label: string;
	name: keyof DescriptionInfoForm;
	isFieldValueRequired: boolean;
	isMultiline: boolean;
};
