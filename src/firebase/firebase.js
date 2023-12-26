// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqbnDWkuDptcvnjDNz0sZiKOr2Ulcuos",
  authDomain: "instabyyogesh.firebaseapp.com",
  projectId: "instabyyogesh",
  storageBucket: "instabyyogesh.appspot.com",
  messagingSenderId: "26658597280",
  appId: "1:26658597280:web:6a62431588406dca665cc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
