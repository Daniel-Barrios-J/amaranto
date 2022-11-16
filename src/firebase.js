// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { addDoc, collection, doc, getDoc, getFirestore, onSnapshot, setDoc, updateDoc } from "firebase/firestore";


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

export const usuario = doc(db, 'usuarios/usuario4');

//escribiendo en un documento
export const setUsuario = async()=>{
  const docData = {
    nombre: 'daniyo',
    apellido: 'sola'
  }
  try {
    await setDoc(usuario, docData)
    console.log('Usuario registrado exitosamente...');
  } catch (error) {
    console.log('Ha habido un error al registrar el usuario... el error es el siguiente: ' + error);
  }
}

// creando un documento nuevo addDoc()
// el documento se crea con un identificador aleatorio
const usuarios = collection(db, 'usuarios')

export const crearUsuario = async() => {
  const newUserInfo = {
    nombre: 'pablo',
    apellido: 'marmol'
  }
  try {
    await addDoc(usuarios, newUserInfo)
    console.log(`usuario creado en ${newUserInfo.path}`);
  } catch (error) {
    console.log(`Ha ocurriodo un error: ${error}`);
  }
}

// leyendo documentos 

export const readDocument = async () => {
  const consulta = await getDoc(usuario);
  if (consulta.exists()) {
    const datos = consulta.data();
    console.log(`la info del usuario es ${JSON.stringify(datos)}`);
  }
}

// leyendo cambios en tiempo real 

export const listenToADocument = () => {
  onSnapshot(usuario, consulta => {
    if (consulta.exists()) {
      const datos = consulta.data();
      console.log(`la info en tiempo real del usuario es ${JSON.stringify(datos)}`);
    }
  })
}

// leyendo varios documentos 