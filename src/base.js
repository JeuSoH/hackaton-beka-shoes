// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6-Ah_w1q6-_4YYE-7RkkHSlJvQtrHxPg",
  authDomain: "hackaton-beka-chika.firebaseapp.com",
  projectId: "hackaton-beka-chika",
  storageBucket: "hackaton-beka-chika.appspot.com",
  messagingSenderId: "761242059271",
  appId: "1:761242059271:web:2c70f87d841c40852a20a2"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;