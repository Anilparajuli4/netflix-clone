// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// REACT_APP_FIREBASE_API_KEY=AIzaSyA06Lc1-1tnB2fCb-3cIGWBtPfx3CxRcB0
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-c6582.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-c6582
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-c6582.appspot.com
// REACT_APP_MESSAGING_SENDER=816762027695
// REACT_APP_APP_ID=1:816762027695:web:a068e4249e6093c08dde5a
