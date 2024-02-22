// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6CroPFTOZ7iYuUjJTqpDOXKYoYftQVU",
  authDomain: "netflix-clone-43d98.firebaseapp.com",
  projectId: "netflix-clone-43d98",
  storageBucket: "netflix-clone-43d98.appspot.com",
  messagingSenderId: "704931813060",
  appId: "1:704931813060:web:5baedf6ef2ba86c8dadb91",
  measurementId: "G-M8Y4VZCK5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export default app;