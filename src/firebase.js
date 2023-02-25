// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9w7EZhF-DDwud0bygj30lhQ2AGGSQOns",
  authDomain: "quora-e161a.firebaseapp.com",
  projectId: "quora-e161a",
  storageBucket: "quora-e161a.appspot.com",
  messagingSenderId: "942392076797",
  appId: "1:942392076797:web:b0546b2a7db6128b371194",
  measurementId: "G-S5YE53D467"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
