import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaM0MFGZcep-hnEZzZMSCuQBpTnHR7cLI",
  authDomain: "your-money-905ef.firebaseapp.com",
  projectId: "your-money-905ef",
  storageBucket: "your-money-905ef.appspot.com",
  messagingSenderId: "56432290453",
  appId: "1:56432290453:web:36cd50f4b6be5bf221c99c",
  measurementId: "G-MTDPC20PPK"
};
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}