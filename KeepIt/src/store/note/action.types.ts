import { ActionMethod } from "../../App";

export const UPDATE_NOTE_REQUEST = "UPDATE_NOTE_REQUEST";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const UPDATE_NOTE_FAILURE = "UPDATE_NOTE_FAILURE";
export type UPDATE_NOTE_ActionTypes = 
ActionMethod<typeof UPDATE_NOTE_REQUEST>
| ActionMethod<typeof UPDATE_NOTE_SUCCESS>
| ActionMethod<typeof UPDATE_NOTE_FAILURE> 

export const GET_NOTE_REQUEST = "GET_NOTE_REQUEST";
export const GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS";
export const GET_NOTE_FAILURE = "GET_NOTE_FAILURE";
export type GET_NOTE_ActionTypes = 
  ActionMethod<typeof GET_NOTE_REQUEST>
  | ActionMethod<typeof GET_NOTE_SUCCESS>
  | ActionMethod<typeof GET_NOTE_FAILURE> 
  
  export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST";
  export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
  export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";
export type DELETE_NOTE_ActionTypes = 
  ActionMethod<typeof DELETE_NOTE_REQUEST>
  | ActionMethod<typeof DELETE_NOTE_SUCCESS>
  | ActionMethod<typeof DELETE_NOTE_FAILURE> 
  
  export const CREATE_NOTE_REQUEST = "CREATE_NOTE_REQUEST";
  export const CREATE_NOTE_SUCCESS = "CREATE_NOTE_SUCCESS";
export const CREATE_NOTE_FAILURE = "CREATE_NOTE_FAILURE";
export type CREATE_NOTE_ActionTypes = 
  ActionMethod<typeof CREATE_NOTE_REQUEST>
  | ActionMethod<typeof CREATE_NOTE_SUCCESS>
  | ActionMethod<typeof CREATE_NOTE_FAILURE> 