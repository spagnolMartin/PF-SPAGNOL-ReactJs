import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "coderreactjsprojectms.firebaseapp.com",
  projectId: "coderreactjsprojectms",
  storageBucket: "coderreactjsprojectms.appspot.com",
  messagingSenderId: "447197413920",
  appId: "1:447197413920:web:8d090eeecb11dc2aaf7245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;