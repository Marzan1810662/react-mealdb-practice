// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXc1rPLPy0LQByHVToPSV4CpbIykic6vA",
  authDomain: "react-mealdb-practice.firebaseapp.com",
  projectId: "react-mealdb-practice",
  storageBucket: "react-mealdb-practice.appspot.com",
  messagingSenderId: "260548836929",
  appId: "1:260548836929:web:9fa22e4358d65f5c78d0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;