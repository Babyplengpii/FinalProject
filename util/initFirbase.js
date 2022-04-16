// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjFzwMjtsRNg7RMADtzhmc2u0DiLCRpbc",
  authDomain: "kpop-a-month.firebaseapp.com",
  projectId: "kpop-a-month",
  storageBucket: "kpop-a-month.appspot.com",
  messagingSenderId: "597317334729",
  appId: "1:597317334729:web:2d6f29e7fe60622a133f18",
  measurementId: "G-DCZ6ZVTSCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);