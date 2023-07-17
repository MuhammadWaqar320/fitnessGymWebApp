// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuOe05whfuk8_lrCWLE2rtrVu1Ti-I9Zk",
  authDomain: "gym-project-af5cc.firebaseapp.com",
  projectId: "gym-project-af5cc",
  storageBucket: "gym-project-af5cc.appspot.com",
  messagingSenderId: "265154121696",
  appId: "1:265154121696:web:959ea3131861ab5d026585",
  measurementId: "G-6SYVS9MJNW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
