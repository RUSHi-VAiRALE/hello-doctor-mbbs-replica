// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREAPIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREAUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREPROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIRESTORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREMESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREAPPID,
  measurementId: process.env.NEXT_PUBLIC_FIREMEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Export the Firebase app instance
export { app };