import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-03FxoF3CX0DUVeGQUttoCUPFNtQBIJs",
  authDomain: "clone-27751.firebaseapp.com",
  databaseURL: "https://clone-27751.firebaseio.com",
  projectId: "clone-27751",
  storageBucket: "clone-27751.appspot.com",
  messagingSenderId: "782154219832",
  appId: "1:782154219832:web:f5516e00bb360634f7c1cd",
  measurementId: "G-ERFM2W9WXL"

});


const auth = firebase.auth();

export { auth };

