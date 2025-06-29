// src/firebaseConfig.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA6SYH5oS8yD_MloJfz2rccr1PNyrAIt2Q",
  authDomain: "nopodfirebase-b02d6.firebaseapp.com",
  projectId: "nopodfirebase-b02d6",
  storageBucket: "nopodfirebase-b02d6.appspot.com",
  messagingSenderId: "35048749950",
  appId: "1:35048749950:web:d159bef41000a28052912f",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Auth com persistência entre sessões
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Inicializa Firestore
const firestore = getFirestore(app);

export { auth, firestore };
