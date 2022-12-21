interface IAuthResponse {
  accessToken: string;
}

interface ILoginUserResponse extends IAuthResponse {}
interface IRegisterUserResponse extends IAuthResponse {}

export type { ILoginUserResponse, IRegisterUserResponse };
