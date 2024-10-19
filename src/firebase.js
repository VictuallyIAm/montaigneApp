import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZND5Gmpem7r-69UfRGdtrZhx9EPXw0o",
  authDomain: "montaigne-e-comm.firebaseapp.com",
  projectId: "montaigne-e-comm",
  storageBucket: "montaigne-e-comm.appspot.com",
  messagingSenderId: "765012171172",
  appId: "1:765012171172:web:3e64a0dfefa2ca2b93c931",
  measurementId: "G-3254TKZR3L",
};

export const firebaseApp = initializeApp(firebaseConfig);

// // const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
