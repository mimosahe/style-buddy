// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCJ43zrPBZGzBNQpbVcsRuRZcg1zjyKgPI",
  authDomain: "style-buddy-fb16a.firebaseapp.com",
  projectId: "style-buddy-fb16a",
  storageBucket: "style-buddy-fb16a.appspot.com",
  messagingSenderId: "570996215154",
  appId: "1:570996215154:web:2db3bf5ced12945d5861eb"
};

// Initialize Firebase
export const firebaseApp = initializeApp({ /* config */ });
export const auth = getAuth();
onAuthStateChanged(auth, user => { console.log(user); });

export const db = getFirestore();
export const storage = getStorage();
