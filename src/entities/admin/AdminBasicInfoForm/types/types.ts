export type BasicInfoForm = {
	fullName?: string;
	nickName: string;
	phoneNumber?: string;
	dateOfBirth?: string;
};

export type BasicInfoFormField = {
	label: string;
	name: keyof BasicInfoForm;
	isFieldValueRequired: boolean;
};
