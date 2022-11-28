import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
 apiKey: "API_KEY_HERE",
 authDomain: "chatbot-aa5fa.firebaseapp.com",
 projectId: "chatbot-aa5fa",
 storageBucket: "chatbot-aa5fa.appspot.com",
 messagingSenderId: "958570634471",
 appId: "1:958570634471:web:6254611100fbc3eb961642",
 measurementId: "G-00BDBJCPHE"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
