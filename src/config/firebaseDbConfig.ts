// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_UG4VeisdhP4t2T7V87X9aX7rpJ5fkkw",
  authDomain: "tarefas-46085.firebaseapp.com",
  projectId: "tarefas-46085",
  storageBucket: "tarefas-46085.appspot.com",
  messagingSenderId: "423213979574",
  appId: "1:423213979574:web:0f8e3e7d322ced5545d317",
  measurementId: "G-0CKM6LN6G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database