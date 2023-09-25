
// Import the functions you need from the SDKs you need
import 'firebase/storage';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore,doc,setDoc} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDflPwafzipN0Pxh_WuGh-h1RTbfWCjz4U",
  authDomain: "airbotfinal.firebaseapp.com",
  databaseURL: "https://airbotfinal-default-rtdb.firebaseio.com",
  projectId: "airbotfinal",
  storageBucket: "airbotfinal.appspot.com",
  messagingSenderId: "193651702264",
  appId: "1:193651702264:web:62482aec9df489286efe0d",
  measurementId: "G-1P57XCF16F"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const storage = getStorage(app);
const db =getDatabase(app);

export { app, auth,db,setDoc, doc, storage};









