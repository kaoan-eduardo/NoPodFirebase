import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
