import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_kjhrhn5MFEz45vpPiO5r1Kscy2Fo8G4",
  authDomain: "propertieso-saurabh-hans.firebaseapp.com",
  projectId: "propertieso-saurabh-hans",
  storageBucket: "propertieso-saurabh-hans.appspot.com",
  messagingSenderId: "467863711009",
  appId: "1:467863711009:web:1ce2cfceaa290bc4e52260",
  measurementId: "G-CWKG4TMZH3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
