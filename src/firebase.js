// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//this file is  like a portable database
const firebaseConfig = {
    apiKey: "AIzaSyCdJxKEe4f87NyE8pAtj9aj7R1orWlvN7Q",
    authDomain: "hashtag-b2fed.firebaseapp.com",
    projectId: "hashtag-b2fed",
    storageBucket: "hashtag-b2fed.appspot.com",
    messagingSenderId: "333957882511",
    appId: "1:333957882511:web:5825237b45cc0b80ba86fa",
    measurementId: "G-2XL3W441DN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;

  //connect the firebase to backend