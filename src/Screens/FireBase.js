// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAefwRl2rf871Nieu1etEQzKx60t0wAVfc",
  authDomain: "reactmeetup-a2f0a.firebaseapp.com",
  databaseURL: "https://reactmeetup-a2f0a-default-rtdb.firebaseio.com",
  projectId: "reactmeetup-a2f0a",
  storageBucket: "reactmeetup-a2f0a.appspot.com",
  messagingSenderId: "863033586609",
  appId: "1:863033586609:web:0e4717573c804b29190390",
  measurementId: "G-TC127L84EY",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const my_auth = getAuth(app);
