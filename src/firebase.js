/*import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyATybzY0D0hmGgoMxIXHWCCqEsjTTX96aY",
    authDomain: "firesrore-practice.firebaseapp.com",
    databaseURL: "https://firesrore-practice-default-rtdb.firebaseio.com",
    projectId: "firesrore-practice",
    storageBucket: "firesrore-practice.appspot.com",
    messagingSenderId: "975436900454",
    appId: "1:975436900454:web:bbc4db09fd5f8b19c965a7",
    measurementId: "G-X6WNWJ0X3B"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
