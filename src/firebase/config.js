// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1CEvh7ecmBCIV7yGzus2PWcQHlf5KvlE",
  authDomain: "react-cursos-15f48.firebaseapp.com",
  projectId: "react-cursos-15f48",
  storageBucket: "react-cursos-15f48.appspot.com",
  messagingSenderId: "787731661115",
  appId: "1:787731661115:web:9570af60c8a48382f8b71e"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FireBaseApp );
export const FireBaseDB = getFirestore( FireBaseApp ); 