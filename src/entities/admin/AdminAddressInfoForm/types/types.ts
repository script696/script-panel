export type AddressInfoForm = {
	country: string;
	city: string;
	addressLine: string;
	apartment: string;
};

export type ProfileAddressField = {
	label: string;
	name: keyof AddressInfoForm;
	isFieldValueRequired: boolean;
};
