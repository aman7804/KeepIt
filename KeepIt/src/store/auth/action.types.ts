import { ActionMethod } from "../../App";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Create specific action types
export type LoginRequestAction = ActionMethod<typeof LOGIN_REQUEST>;
export type LoginSuccessAction = ActionMethod<typeof LOGIN_SUCCESS>;
export type LoginFailureAction = ActionMethod<typeof LOGIN_FAILURE>;

// Union of both actions
export type AuthActionTypes = LoginRequestAction
| LoginSuccessAction
| LoginFailureAction;