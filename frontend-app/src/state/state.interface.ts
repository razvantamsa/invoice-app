export interface IAuthState {
  accessToken: string | null;
  error: string | null;
}

export default interface IState {
  auth: IAuthState;
}
