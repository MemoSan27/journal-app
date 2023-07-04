import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FireBaseDB, `${ uid }/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote );
        

        console.log({ newDoc, setDocResp});

        //!dispatch
        //dispatch ( newNote )
        //dispatch ( activarNote )
    }
}