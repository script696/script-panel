export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  role: string;
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}
