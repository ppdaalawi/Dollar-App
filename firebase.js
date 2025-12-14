// firebase.js
// ======================
// Firebase Initialization
// ======================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

/* ======================
   AUTH
====================== */
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* ======================
   FIRESTORE
====================== */
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ======================
   FIREBASE CONFIG
====================== */
const firebaseConfig = {
    apiKey: "AIzaSyBS3NiL5jWJw7R85SU-hei6F5hu9J7Gxi4",
    authDomain: "dollar-3d221.firebaseapp.com",
    projectId: "dollar-3d221",
    storageBucket: "dollar-3d221.firebasestorage.app",
    messagingSenderId: "872898410926",
    appId: "1:872898410926:web:b122a1b71d5b2de863703f",
    measurementId: "G-3K7FZ6XRMJ"
};

/* ======================
   INIT
====================== */
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

/* ======================
   EXPORTS (PUBLIC API)
====================== */
export {
    // Auth
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,

    // Firestore
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
};