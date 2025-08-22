// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAUPidCbhxt6-FB728CH6Z9YCAmN7Qc7JY",
  authDomain: "portfolio-9b464.firebaseapp.com",
  databaseURL: "https://portfolio-9b464-default-rtdb.firebaseio.com",
  projectId: "portfolio-9b464",
  storageBucket: "portfolio-9b464.appspot.com",
  messagingSenderId: "281285294545",
  appId: "1:281285294545:web:328b914257e0b75cc908f0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
