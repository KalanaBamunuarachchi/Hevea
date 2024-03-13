// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDznI1dGnjCacKwd_IKGtNG0I2eRttYXCI",
  authDomain: "hevea-7a027.firebaseapp.com",
  projectId: "hevea-7a027",
  storageBucket: "hevea-7a027.appspot.com",
  messagingSenderId: "741000065624",
  appId: "1:741000065624:web:04200b7af488c79bd6902d",
  measurementId: "G-NBXXKCHSSP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


