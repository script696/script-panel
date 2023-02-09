export interface User {
	nickName: string;
	email: string;
	role: string;
	avatarUrl?: string;
	fullName?: string;
	dateOfBirth?: string;
	phoneNumber?: string;
	apartment?: string;
	country?: string;
	city?: string;
	addressLine?: string;
}

export interface getUserResponse extends User {}
