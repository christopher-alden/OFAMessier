
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile, setPersistence, browserLocalPersistence } from "firebase/auth"
import { getStorage} from "firebase/storage"
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore();

export const registerUser = async (initial, email, password) => {
  await setPersistence(auth, browserLocalPersistence);

  const res = await createUserWithEmailAndPassword(auth, email, password);
  
  await updateProfile(res.user, {
      displayName: initial
  });
  
  await setDoc(doc(db, "users", res.user.uid), {
      uid: res.user.uid,
      initial,
      email
  });

  await setDoc(doc(db, "userSchedules", res.user.uid), {});
  console.log("done");
  return res.user;
};
