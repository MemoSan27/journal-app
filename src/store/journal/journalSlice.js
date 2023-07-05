import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        /* {
            id: 'ABC123',
            title: '',
            body: '', 
            date: 1234567,
            imageUrls: [],
        }, */
    },
    reducers: {
        creatingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
           state.notes = action.payload;

        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        noteUpdated: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id){
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotostoActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        deleteNoteById: (state, action) => {

        },


        
    }
});


// Action creators are generated for each case reducer function
export const {
     addNewEmptyNote, 
     setActiveNote, 
     setNotes,
     setSaving,
     noteUpdated,
     deleteNoteById,
     creatingNewNote,  
     setPhotostoActiveNote,
    } = journalSlice.actions;
