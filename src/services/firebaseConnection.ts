import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW53g8UWui7-HcaWUcy-8iIP_AUx0apbU",
  authDomain: "webcarros-8182e.firebaseapp.com",
  projectId: "webcarros-8182e",
  storageBucket: "webcarros-8182e.firebasestorage.app",
  messagingSenderId: "844345803971",
  appId: "1:844345803971:web:d61219c62c06e336fa8e76",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
