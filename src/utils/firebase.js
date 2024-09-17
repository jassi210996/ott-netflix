// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBjZhUXucbhTVdZmausC6gHVBfPZUPWi2A",

  authDomain: "practicefirebase-471c3.firebaseapp.com",

  databaseURL: "https://practicefirebase-471c3.firebaseio.com",

  projectId: "practicefirebase-471c3",

  storageBucket: "practicefirebase-471c3.appspot.com",

  messagingSenderId: "769268630285",

  appId: "1:769268630285:web:4ec383f7024dad0a9a6644",
};

// Initialize Firebase
const configureFirebase = () => {
  const app = initializeApp(firebaseConfig);
};

export default configureFirebase;
