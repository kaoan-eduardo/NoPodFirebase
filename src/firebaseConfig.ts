import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "REMOVIDO",
  authDomain: "nopodfirebase-b02d6.firebaseapp.com",
  projectId: "nopodfirebase-b02d6",
  storageBucket: "nopodfirebase-b02d6.appspot.com",
  messagingSenderId: "35048749950",
  appId: "1:35048749950:web:d159bef41000a28052912f",
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Funciona no celular e no navegador
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
