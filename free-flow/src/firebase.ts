// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxOz5w1dJoDYkxTglL3zhbFFSmGv6ml2s",
    authDomain: "free-flow-d207c.firebaseapp.com",
    databaseURL: "https://free-flow-d207c-default-rtdb.firebaseio.com/", 
    projectId: "free-flow-d207c",
    storageBucket: "free-flow-d207c.firebasestorage.app",
    messagingSenderId: "1074209403195",
    appId: "1:1074209403195:web:ea0c0dbd1c7efdf571871e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

