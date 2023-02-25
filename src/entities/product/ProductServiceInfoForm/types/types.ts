export type ServiceInfoForm = {
	id: number;
	totalSold: number;
	amount: number;
};

export type ServiceInfoField = {
	label: string;
	name: keyof ServiceInfoForm;
	isFieldValueRequired: boolean;
};
