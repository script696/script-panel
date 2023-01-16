interface AuthResponse {
  accessToken: string;
}

interface LoginUserResponse extends AuthResponse {}
interface RegisterUserResponse extends AuthResponse {}
interface CheckAuthResponse extends AuthResponse {}

export type { LoginUserResponse, RegisterUserResponse, CheckAuthResponse };
