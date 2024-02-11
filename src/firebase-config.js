import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpN9GUJ8G6_JQsJO3IafzsflXr5ZcYa4A",
  authDomain: "project-dd1f5.firebaseapp.com",
  databaseURL: "https://project-dd1f5-default-rtdb.firebaseio.com",
  projectId: "project-dd1f5",
  storageBucket: "project-dd1f5.appspot.com",
  messagingSenderId: "419078160398",
  appId: "1:419078160398:web:3cb1fbc4bdb44102963c5f",
};
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
