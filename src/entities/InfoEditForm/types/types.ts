export type FormInfoValues = {
	fullName: string;
	nickName: string;
	phoneNumber: string;
	dateOfBirth: string;
};

export type FormAddressValues = {
	country: string;
	city: string;
	addressLine: string;
	apartment: string;
};

export type ProfileInfoField = {
	label: string;
	name: keyof FormInfoValues;
	isFieldValueRequired: boolean;
};

export type ProfileAddressField = {
	label: string;
	name: keyof FormAddressValues;
	isFieldValueRequired: boolean;
};

export type TabsData = {
	index: number;
	label: string;
	tabSlide: JSX.Element;
};
