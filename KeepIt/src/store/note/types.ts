export interface UpdateNoteRequestPayload{
  date: Date;
  note: string;
  callback?: any;
}
export interface UpdateNoteSuccessPayload{
  callback?: any;
}

export interface GetNoteRequestPayload{
  date: Date;
  message?: string;
  callback?: any;
}
export interface GetNoteSuccessPayload{
  note: string;
  message?: string;
  callback?: any;
}

export interface CreateNoteRequestPayload{
  date: Date;
  callback?: any;
}
export interface CreateNoteSuccessPayload{
  message?: string;
  callback?: any;
}

export interface DeleteNoteRequestPayload{
  date: Date;
  callback?: any;
}
export interface DeleteNoteSuccessPayload{
  message?: string;
  callback?: any;
}

export interface Note{
  date: Date;
  note?: string;
}
export interface NoteState {
  pending: boolean;
  noteStorage: Note[];
  currentNote: Note | null;
  error: string | null;
}