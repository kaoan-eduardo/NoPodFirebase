import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

interface ExpoExtra {
  EXPO_PUBLIC_API_KEY: string;
  EXPO_PUBLIC_AUTH_DOMAIN: string;
  EXPO_PUBLIC_PROJECT_ID: string;
  EXPO_PUBLIC_STORAGE_BUCKET: string;
  EXPO_PUBLIC_MESSAGING_SENDER_ID: string;
  EXPO_PUBLIC_APP_ID: string;
}

const expoConfig = Constants.expoConfig ?? { extra: {} as ExpoExtra };
const extra = expoConfig.extra as ExpoExtra;

const firebaseConfig = {
  apiKey: `${extra.EXPO_PUBLIC_API_KEY}`,
  authDomain: `${extra.EXPO_PUBLIC_AUTH_DOMAIN}`,
  projectId: `${extra.EXPO_PUBLIC_PROJECT_ID}`,
  storageBucket: `${extra.EXPO_PUBLIC_STORAGE_BUCKET}`,
  messagingSenderId: `${extra.EXPO_PUBLIC_MESSAGING_SENDER_ID}`,
  appId: `${extra.EXPO_PUBLIC_APP_ID}`,
};

console.log("🔥 Firebase Config:", firebaseConfig);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
