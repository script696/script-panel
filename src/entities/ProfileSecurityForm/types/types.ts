export type ChangePasswordValues = {
	oldPassword: string;
	newPassword: string;
	repeatPassword: string;
};

export type ProfileSecurityField = {
	isFieldValueRequired: boolean;
	label: string;
	name: keyof ChangePasswordValues;
	title: string;
};
