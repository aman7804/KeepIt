import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action.types";

export interface AuthState {
  pending: boolean;
  token?: string | null;
  error: string | null;
}

export interface LoginSuccessPayload {
  accessToken?: string;
}

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: any;
}
export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};
export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: any;
};


export type AuthActions =
| LoginRequest
| LoginSuccess
| LoginFailure