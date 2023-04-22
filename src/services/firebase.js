import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Web Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPsh8RWU7MCtN14oclv51dMPsgbqIAYdw",
  authDomain: "amaranto-72564.firebaseapp.com",
  projectId: "amaranto-72564",
  storageBucket: "amaranto-72564.appspot.com",
  messagingSenderId: "889848590481",
  appId: "1:889848590481:web:3deaa37fdce07805a04f30",
  measurementId: "G-Z8N2XE7XL7"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

//SERVICES 

// Firestore -------
export const db = getFirestore(app);

// Autenticacion ---
export const auth = getAuth(app);