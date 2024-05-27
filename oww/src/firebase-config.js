import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBHN3JKd0mfef6vKmz0hrCda01FyB8H-a8",
  authDomain: "ourworld-d28af.firebaseapp.com",
  projectId: "ourworld-d28af",
  storageBucket: "ourworld-d28af.appspot.com",
  messagingSenderId: "181883827804",
  appId: "1:181883827804:web:176a76ec29a2bcc3ad5899",
};

const firebase = initializeApp(firebaseConfig);
export const storage = getStorage();
export default firebase;
