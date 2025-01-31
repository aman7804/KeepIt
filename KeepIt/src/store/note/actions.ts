import {
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  GET_NOTE_REQUEST,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE
} from "./action.types";
import * as TYPES from "./types";
import { ActionMethod } from "../../App";
import { FailurePayload } from "../generic.interface";

// updateNote
export const updateNoteRequest = (payload: TYPES.UpdateNoteRequestPayload):
ActionMethod<typeof UPDATE_NOTE_REQUEST, TYPES.UpdateNoteRequestPayload> => ({
  type: UPDATE_NOTE_REQUEST,
  payload
});
export const updateNoteSuccess = (payload: TYPES.UpdateNoteSuccessPayload):
ActionMethod<typeof UPDATE_NOTE_SUCCESS, TYPES.UpdateNoteSuccessPayload> => ({
  type: UPDATE_NOTE_SUCCESS,
  payload
});
export const updateNoteFailure = ( payload: FailurePayload ):
ActionMethod<typeof UPDATE_NOTE_FAILURE, FailurePayload> => ({
  type: UPDATE_NOTE_FAILURE,
  payload,
});

// getNote
export const getNoteRequest = (payload: TYPES.GetNoteRequestPayload):
ActionMethod<typeof GET_NOTE_REQUEST, TYPES.GetNoteRequestPayload> => ({
  type: GET_NOTE_REQUEST,
  payload
});
export const getNoteSuccess = (payload: TYPES.GetNoteSuccessPayload):
ActionMethod<typeof GET_NOTE_SUCCESS, TYPES.GetNoteSuccessPayload> => ({
  type: GET_NOTE_SUCCESS,
  payload,
});
export const getNoteFailure = (payload: FailurePayload):
ActionMethod<typeof GET_NOTE_FAILURE, FailurePayload> => ({
  type: GET_NOTE_FAILURE,
  payload,
});

// deleteNote
export const deleteNoteRequest = (payload: TYPES.DeleteNoteRequestPayload):
ActionMethod<typeof DELETE_NOTE_REQUEST, TYPES.DeleteNoteRequestPayload> => ({
  type: DELETE_NOTE_REQUEST
});
export const deleteNoteSuccess = (payload: TYPES.DeleteNoteSuccessPayload):
ActionMethod<typeof DELETE_NOTE_SUCCESS, TYPES.DeleteNoteSuccessPayload> => ({
  type: DELETE_NOTE_SUCCESS,
  payload,
});
export const deleteNoteFailure = (payload: FailurePayload):
ActionMethod<typeof DELETE_NOTE_FAILURE, FailurePayload> => ({
  type: DELETE_NOTE_FAILURE,
  payload,
});

// createNote
export const createNoteRequest = (payload: TYPES.CreateNoteRequestPayload):
ActionMethod<typeof CREATE_NOTE_REQUEST, TYPES.CreateNoteRequestPayload> => ({
  type: CREATE_NOTE_REQUEST,
  payload
});
export const createNoteSuccess = (payload: TYPES.CreateNoteSuccessPayload):
ActionMethod<typeof CREATE_NOTE_SUCCESS, TYPES.CreateNoteSuccessPayload> => ({
  type: CREATE_NOTE_SUCCESS,
  payload,
});
export const createNoteFailure = (payload: FailurePayload):
ActionMethod<typeof CREATE_NOTE_FAILURE, FailurePayload> => ({
  type: CREATE_NOTE_FAILURE,
  payload,
});

export type NoteActionTypes = 
| ActionMethod<typeof UPDATE_NOTE_REQUEST, TYPES.UpdateNoteRequestPayload>
| ActionMethod<typeof UPDATE_NOTE_SUCCESS, TYPES.UpdateNoteSuccessPayload>
| ActionMethod<typeof UPDATE_NOTE_FAILURE, FailurePayload>
| ActionMethod<typeof GET_NOTE_REQUEST, TYPES.GetNoteRequestPayload>
| ActionMethod<typeof GET_NOTE_SUCCESS, TYPES.GetNoteSuccessPayload>
| ActionMethod<typeof GET_NOTE_FAILURE, FailurePayload>
| ActionMethod<typeof DELETE_NOTE_REQUEST, TYPES.DeleteNoteRequestPayload>
| ActionMethod<typeof DELETE_NOTE_SUCCESS, TYPES.DeleteNoteSuccessPayload>
| ActionMethod<typeof DELETE_NOTE_FAILURE, FailurePayload>
| ActionMethod<typeof CREATE_NOTE_REQUEST, TYPES.CreateNoteRequestPayload>
| ActionMethod<typeof CREATE_NOTE_SUCCESS, TYPES.CreateNoteSuccessPayload>
| ActionMethod<typeof CREATE_NOTE_FAILURE, FailurePayload>