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
import { getNoteSuccess, NoteActionTypes } from "./actions";
import { NoteState } from "./types";

const initialState: NoteState = {
  pending: false,
  noteStorage: [],
  currentNote: 
  error: null,
};

const reducers = (state = initialState, action: NoteActionTypes) => {
  switch (action.type) {
    case CREATE_NOTE_REQUEST:
      if (!action.payload) return state;
      return {
        ...state,
        pending: true,
        noteStorage: [
          ...state.noteStorage,
          { date: action.payload.date, note: "" }
        ]
      };
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    case CREATE_NOTE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload?.error,
      };
    case UPDATE_NOTE_REQUEST:{
      const { date, note } = action.payload || {};
      if(!date || !note) return state;
      return{
        ...state,
        pending: true,
        noteStorage: state.noteStorage.find(note => note.date === date)
        ? state.noteStorage.map((n) =>
          n.date === date ? {...n, note} : n)
        : [...state.noteStorage, { date, note }]
      }
    };
    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    case UPDATE_NOTE_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload?.error,
      };
    case GET_NOTE_REQUEST:
      return{
        ...state,
        pending: true,
      }
    default:
      return state;
  }
};
export default reducers;