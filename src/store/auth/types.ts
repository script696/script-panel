interface IAuthResponse {
  accessToken: string;
}

interface ILoginUserResponse extends IAuthResponse {}
interface IRegisterUserResponse extends IAuthResponse {}
interface ICheckAuthResponse extends IAuthResponse {}

export type { ILoginUserResponse, IRegisterUserResponse, ICheckAuthResponse };
