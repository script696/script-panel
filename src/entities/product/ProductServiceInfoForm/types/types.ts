export type ServiceInfoForm = {
	totalSold: number;
	amount: number;
};

export type ServiceInfoField = {
	label: string;
	name: keyof ServiceInfoForm;
	isFieldValueRequired: boolean;
};
