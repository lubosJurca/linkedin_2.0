import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuXEeli5bG52O78fMNYtwc8UjDkB1nFHM",
  authDomain: "linkedin-clone-7dd91.firebaseapp.com",
  projectId: "linkedin-clone-7dd91",
  storageBucket: "linkedin-clone-7dd91.appspot.com",
  messagingSenderId: "77981353501",
  appId: "1:77981353501:web:92f03462d30a20706be8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth()

export { db, auth}