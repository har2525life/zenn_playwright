import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCPFLwHl6mdnlsk5ZDZhQ76FeB4Zd8zAPw",
  authDomain: "apliwright-test.firebaseapp.com",
  projectId: "apliwright-test",
  storageBucket: "apliwright-test.appspot.com",
  messagingSenderId: "357759846599",
  appId: "1:357759846599:web:7d78d48cb8414853e416e2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


