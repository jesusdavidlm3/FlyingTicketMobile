import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPmzpCScoNlQo7AV44JacGv1msA-uJ0uc",
    authDomain: "appsmovilesurbe.firebaseapp.com",
    projectId: "appsmovilesurbe",
    storageBucket: "appsmovilesurbe.appspot.com",
    messagingSenderId: "1035752813852",
    appId: "1:1035752813852:web:90d03438efcc9a9caab6d9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);