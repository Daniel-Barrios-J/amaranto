//third libraries
import { v4 as uuidv4 } from 'uuid';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPsh8RWU7MCtN14oclv51dMPsgbqIAYdw",
  authDomain: "amaranto-72564.firebaseapp.com",
  projectId: "amaranto-72564",
  storageBucket: "amaranto-72564.appspot.com",
  messagingSenderId: "889848590481",
  appId: "1:889848590481:web:3deaa37fdce07805a04f30",
  measurementId: "G-Z8N2XE7XL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// trayendo productos --------------------------------------------------

export const getProducts = async() =>{
  const products = []
  const productsData = await getDocs(collection(db, 'productos'));
  productsData.forEach(doc => products.push(doc.data()))
  return products
}


//Agregar porducto ----------------

const productsCollection = collection(db, 'productos');
export const addProduct = async (name = 'Ramo 12 rosas', description = 'Ramo de 12 rosas, con decorado y envoltura de papel celofan con tela, acompañado con moño y nota dedicatoria', price = 370, img='https://st.depositphotos.com/1038919/3939/i/950/depositphotos_39390605-stock-photo-bouquet-of-blossoming-dark-red.jpg') => {
  const newProduct = await addDoc(productsCollection, {
    name,
    description,
    price,
    images: {
      img1: img,
    },
    id: uuidv4(),
  })
  console.log(`el producto ${newProduct} ha sido creado exitosamente...`);
}