// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD_wszZW5tBL1HBqih5FZhnh0iYo9ybto",
    authDomain: "collect-offers.firebaseapp.com",
    projectId: "collect-offers",
    storageBucket: "collect-offers.firebasestorage.app",
    messagingSenderId: "186607271163",
    appId: "1:186607271163:web:8ff15f1c2a66af1e31c45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)