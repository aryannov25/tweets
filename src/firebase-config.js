import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCa65iScX88eF66yC9YjB6As5qMda_svho",
  authDomain: "fir-auth-5ce51.firebaseapp.com",
  projectId: "fir-auth-5ce51",
  storageBucket: "fir-auth-5ce51.appspot.com",
  messagingSenderId: "137942727309",
  appId: "1:137942727309:web:ce749f96b13fb21c7dc0c4",
  measurementId: "G-BQJ35XNH2T",
};

const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
