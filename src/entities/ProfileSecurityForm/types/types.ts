export type FormSecurityValues = {
	oldPassword: string;
	newPassword: string;
	repeatPassword: string;
};

export type ProfileSecurityField = {
	isFieldValueRequired: boolean;
	label: string;
	name: keyof FormSecurityValues;
	title: string;
};
