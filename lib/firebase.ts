import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8H8Age4tgrDS_A4yJHuQT-wq74F69DGA",
  authDomain: "neo-void-store.firebaseapp.com",
  projectId: "neo-void-store",
  storageBucket: "neo-void-store.firebasestorage.app",
  messagingSenderId: "121635723895",
  appId: "1:121635723895:web:fbed75906425e278610472",
  measurementId: "G-389DJGNHLC"
};

// Чтобы Next.js не создавал лишние подключения при перезагрузке
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };