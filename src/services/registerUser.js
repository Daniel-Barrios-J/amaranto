// firebase app data
import { auth, db } from "./firebase";

// firebase services
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

// class user
import { getUserBase } from '../models/user.base'

export const signUp = async (name, email, password, phone) => {
  // create user in firebase auth
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // create user data in firebase db
  const userDoc =`usuarios/${userCredential.user.uid}`;
  const userData = doc(db, userDoc);
  const userState = getUserBase(name, email, phone, userCredential.user.uid);
  await setDoc(userData, userState);
}