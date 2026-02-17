// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo0MJGSkvIGzO2rjylyoiywV5whXPUT5c",
  authDomain: "beyza-firebase.firebaseapp.com",
  projectId: "beyza-firebase",
  storageBucket: "beyza-firebase.firebasestorage.app",
  messagingSenderId: "648321279224",
  appId: "1:648321279224:web:d226400043c0d19fc9870d",
  measurementId: "G-CZQLDK1WVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
