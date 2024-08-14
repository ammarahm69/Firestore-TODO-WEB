// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1WMgW0jMsWJBNSKcCYN0F4FdvjiDz7eE",
  authDomain: "fir-e7ffb.firebaseapp.com",
  projectId: "fir-e7ffb",
  storageBucket: "fir-e7ffb.appspot.com",
  messagingSenderId: "361643856203",
  appId: "1:361643856203:web:f767c60063b1d111c4d8ce",
  measurementId: "G-6M59R7H292",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db, addDoc, collection, getDocs };
