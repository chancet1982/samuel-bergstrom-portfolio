// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayHdYaV6vHwRKXm_B4fPrpIbixwCN4FY",
  authDomain: "samuel-bergstrom-portfolio.firebaseapp.com",
  projectId: "samuel-bergstrom-portfolio",
  storageBucket: "samuel-bergstrom-portfolio.appspot.com",
  messagingSenderId: "619981109168",
  appId: "1:619981109168:web:1d6e40968f857fe5514875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
