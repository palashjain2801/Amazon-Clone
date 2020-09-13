import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB0oTuolpyTsjbH7T05yyig8rtvxA19bj8",
    authDomain: "challenge-4846f.firebaseapp.com",
    databaseURL: "https://challenge-4846f.firebaseio.com",
    projectId: "challenge-4846f",
    storageBucket: "challenge-4846f.appspot.com",
    messagingSenderId: "1031029258034",
    appId: "1:1031029258034:web:d6997f12f79ea98072092b",
    measurementId: "G-25YLYLXFTD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};