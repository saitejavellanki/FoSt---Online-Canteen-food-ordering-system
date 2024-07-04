
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyASg-Nc5rCihsR4wp2EMtFv7ExW_aGmkjU",
  authDomain: "fost-1f177.firebaseapp.com",
  projectId: "fost-1f177",
  storageBucket: "fost-1f177.appspot.com",
  messagingSenderId: "559790526320",
  appId: "1:559790526320:web:80b8a01a4eac22569389b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;