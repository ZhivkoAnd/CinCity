import * as firebase from 'firebase/app'
import 'firebase/auth'

  // Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBXPKIDp2BD12ROkLrioKZzwIuB_xnYAow",
    authDomain: "moviedb-c4397.firebaseapp.com",
    databaseURL: "https://moviedb-c4397.firebaseio.com",
    projectId: "moviedb-c4397",
    storageBucket: "moviedb-c4397.appspot.com",
    messagingSenderId: "1035666753236",
    appId: "1:1035666753236:web:109368b43cff1ebf19dd41",
    measurementId: "G-5RQMV10RZ3"
  });
  // Initialize Firebase
  
export default firebaseConfig

