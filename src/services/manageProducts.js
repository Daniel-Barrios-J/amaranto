// firebase app data
import { db } from "./firebase";

// firebase services
import { addDoc, collection, getDocs } from "firebase/firestore";

//third libraries
import { v4 as uuidv4 } from 'uuid';

// Crear producto
const productsCollection = collection(db, 'productos');
export const addProduct = async ({name = '', description = '', price = 370, img='https://st.depositphotos.com/1038919/3939/i/950/depositphotos_39390605-stock-photo-bouquet-of-blossoming-dark-red.jpg'}) => {
  const newProduct = await addDoc(productsCollection, {
    name,
    description,
    price,
    images: {
      img1: img,
    },
    id: uuidv4(),
  })
  console.log('Producto creado correctamente:', newProduct);
}

// Trayendo productos en inicio
export const getProducts = async() => {
  const products = []
  const productsData = await getDocs(collection(db, 'productos'));
  productsData.forEach(doc => products.push(doc.data()))
  return products
}