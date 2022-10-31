// Import the functions you need from the SDKs you need
import { firebase } from "@react-native-firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR-evVj6Tdg2yVST84104jEU9ffMDJPM8",
  authDomain: "login-e7223.firebaseapp.com",
  databaseURL: "https://login-e7223-default-rtdb.firebaseio.com",
  projectId: "login-e7223",
  storageBucket: "login-e7223.appspot.com",
  messagingSenderId: "691482010420",
  appId: "1:691482010420:web:4036ccbcb67f84975bfb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
