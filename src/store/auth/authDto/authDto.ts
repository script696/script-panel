export interface LoginDto {
	email: string;
	password: string;
}

export interface RegisterDto {
	role: string;
	nickName: string;
	email: string;
	password: string;
	passwordRepeat: string;
}
