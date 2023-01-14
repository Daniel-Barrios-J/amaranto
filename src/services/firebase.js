// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true
// });

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