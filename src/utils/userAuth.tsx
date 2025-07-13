import { router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function checkUserAuth() {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace("/");
    }
  });

  return unsubscribe;
}
