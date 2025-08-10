// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjv8iV3i1PLxja51dEEtRRc83McK-dR34",
  authDomain: "job-portal-main.firebaseapp.com",
  projectId: "job-portal-main",
  storageBucket: "job-portal-main.firebasestorage.app",
  messagingSenderId: "262821088115",
  appId: "1:262821088115:web:8ca35b3d93f87247971306",
  measurementId: "G-FCYNLH0JDV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
