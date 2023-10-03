// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl9eFMaN8zMKTRVulQ4B-O75Nfn7VZYUc",
  authDomain: "bun-chat-gpt-clone.firebaseapp.com",
  projectId: "bun-chat-gpt-clone",
  storageBucket: "bun-chat-gpt-clone.appspot.com",
  messagingSenderId: "429265616945",
  appId: "1:429265616945:web:de0822c5235a68bdefd510",
  measurementId: "G-TWXGDLNJ8Y"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
