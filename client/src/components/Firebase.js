import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn1sQDhRTgH3sO3AMIHlZ2TwY2l2PUTgk",
    authDomain: "inventory-control-91beb.firebaseapp.com",
    databaseURL: "https://inventory-control-91beb-default-rtdb.firebaseio.com",
    projectId: "inventory-control-91beb",
    storageBucket: "inventory-control-91beb.appspot.com",
    messagingSenderId: "1079928461215",
    appId: "1:1079928461215:web:939399b408144f95800faa",
    measurementId: "G-WYQR6FTP7Z"
  };

const firebaseApp  = initializeApp(firebaseConfig);
const auth = getAuth();

export {firebaseApp,auth} ;
