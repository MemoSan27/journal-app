import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FireBaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
   try {

        const result = await signInWithPopup( FireBaseAuth, googleProvider );
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
     
    
   } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
   

        return {
            ok: false, 
            errorMessage,
        }
   }
}