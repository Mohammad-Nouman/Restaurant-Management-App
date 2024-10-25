// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const my_auth = getAuth(app);
