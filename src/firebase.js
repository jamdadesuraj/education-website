import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ-XKDxIcY6rpcOwVbtC8cykCTR3urKGU",
  authDomain: "education-app-94280.firebaseapp.com",
  databaseURL: "https://education-app-94280-default-rtdb.firebaseio.com",
  projectId: "education-app-94280",
  storageBucket: "education-app-94280.appspot.com",
  messagingSenderId: "758740655007",
  appId: "1:758740655007:web:039159cd4b64dd65e97baa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
