import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, creatingNewNote, noteUpdated, setActiveNote, setNotes, setPhotostoActiveNote, setSaving } from "./";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( creatingNewNote() );

        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FireBaseDB, `${ uid }/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote );
        

        console.log({ newDoc, setDocResp});

        newNote.id = newDoc.id;

        //!dispatch
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoadingNotes = ( ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );

    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        //console.log(noteToFirestore);

        const docRef = doc( FireBaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFirestore, { merge: true }); 

        dispatch( noteUpdated( note ) );

    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        
        dispatch( setSaving() );
        
        //await fileUpload( files[0] );
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ))
            
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        dispatch( setPhotostoActiveNote( photosUrls ) );

    } 
}