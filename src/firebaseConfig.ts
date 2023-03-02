// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcL5d_XUCKPJvlkb0tcCJCdzj7WYpyyj8",
    authDomain: "vite-project-bb934.firebaseapp.com",
    projectId: "vite-project-bb934",
    storageBucket: "vite-project-bb934.appspot.com",
    messagingSenderId: "333405995071",
    appId: "1:333405995071:web:0246051549e4d2e5edb88a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
