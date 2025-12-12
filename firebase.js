// firebase.js
// ----------------------
// Firebase Initialization
// ----------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
    getFirestore, 
    doc, setDoc, getDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ----------------------
//  YOUR FIREBASE CONFIG
// ----------------------
const firebaseConfig = {
  apiKey: "AIzaSyBS3NiL5jWJw7R85SU-hei6F5hu9J7Gxi4",
  authDomain: "dollar-3d221.firebaseapp.com",
  projectId: "dollar-3d221",
  storageBucket: "dollar-3d221.firebasestorage.app",
  messagingSenderId: "872898410926",
  appId: "1:872898410926:web:b122a1b71d5b2de863703f",
  measurementId: "G-3K7FZ6XRMJ"
};


// ----------------------
// Initialize Firebase
// ----------------------
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);


// Export functions
export {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    doc, setDoc, getDoc, signOut
};