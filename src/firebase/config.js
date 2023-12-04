// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChF6lKwYTC6CdhlSmVMOpkXmXZRNnXWQ0",
  authDomain: "proyecto-ecommerce-react-137b1.firebaseapp.com",
  projectId: "proyecto-ecommerce-react-137b1",
  storageBucket: "proyecto-ecommerce-react-137b1.appspot.com",
  messagingSenderId: "1082812643332",
  appId: "1:1082812643332:web:48f26b5d72f840bc845d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect = () => app