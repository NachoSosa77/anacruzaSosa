// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmCOJQ4OQxXq-vUYGa_qOboK9Yi71ifzM",
  authDomain: "anacrusa-sosa.firebaseapp.com",
  projectId: "anacrusa-sosa",
  storageBucket: "anacrusa-sosa.appspot.com",
  messagingSenderId: "218202290991",
  appId: "1:218202290991:web:39c358d2af44490fa0bfda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
