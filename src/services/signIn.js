// firebase app data
import { auth, db } from "./firebase";

// firebase services
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// login user -------
export const logIn = async(email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const userDoc = doc(db, `usuarios/${userCredential.user.uid}` );
  const user = await getDoc(userDoc);
  try {
    if(user.exists()) {
      return user.data()
    } 
  } catch (err) {
    console.log(`Ha ocurrido un error: ${err}`);
  }
}

// logOut -------------
export const logOut = async() => {
  await signOut();
}