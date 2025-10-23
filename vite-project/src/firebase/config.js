// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvQiHYL32K9hiLTSBHZ_EKUzjLg5mMdAc",
  authDomain: "skill-share-cf233.firebaseapp.com",
  projectId: "skill-share-cf233",
  storageBucket: "skill-share-cf233.firebasestorage.app",
  messagingSenderId: "215094638649",
  appId: "1:215094638649:web:14932eede28a627210f5e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
