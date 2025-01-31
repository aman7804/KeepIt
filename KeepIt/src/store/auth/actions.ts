import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./action.types";
import * as TYPES from "./types";
import { ActionMethod } from "../../App";

export const loginRequest = (): ActionMethod<typeof LOGIN_REQUEST> => ({
  type: LOGIN_REQUEST
});
export const loginSuccess = (
  payload: TYPES.LoginSuccessPayload
): ActionMethod<typeof LOGIN_SUCCESS, TYPES.LoginSuccessPayload> => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginFailure = (
  payload: any
): ActionMethod<typeof LOGIN_FAILURE, any> => ({
  type: LOGIN_FAILURE,
  payload,
});