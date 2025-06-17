// firebase.js (modular version)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-LKFW6whP17vhP_8HG9_P1w91VG3oHQY",
  authDomain: "disneyplus-clone-5c5e5.firebaseapp.com",
  projectId: "disneyplus-clone-5c5e5",
  storageBucket: "disneyplus-clone-5c5e5.appspot.com",
  messagingSenderId: "735714357423",
  appId: "1:735714357423:web:1efdfe6f648523eb98a45a",
  measurementId: "G-9E0D5SXNDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
