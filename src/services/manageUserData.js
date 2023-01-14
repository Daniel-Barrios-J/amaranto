// firebase app data
import { db } from "./firebase";

// firebase services
import { doc, setDoc } from "firebase/firestore";

// Manage data user
export const manageUserData = async (data) => {
  const user = doc(db, `usuarios/${data.uid}`);
  try {
    await setDoc(user, data);
  } catch(err) {
    console.log(`Hubo un error al modificar los datos: ${err}`);
  }
}