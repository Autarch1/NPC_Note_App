
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
    id: number;
    title: string;
    note: string;
}

interface NoteState {
    noteList: Note[];
}

const initialState: NoteState = {
    noteList: [],
};

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNoteData: (state, action: PayloadAction<Note>) => {
            state.noteList.push(action.payload);
        },
        resetState: state => {
            state.noteList = [];
        },
    },
});

export const { resetState, addNoteData } = noteSlice.actions;
export default noteSlice.reducer;
