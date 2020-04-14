import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAZSpJfkUE5e2yoiKIX9qj80qMK_KUuCtg",
    authDomain: "dopestar-4bfa7.firebaseapp.com",
    databaseURL: "https://dopestar-4bfa7.firebaseio.com",
    projectId: "dopestar-4bfa7",
    storageBucket: "dopestar-4bfa7.appspot.com",
    messagingSenderId: "480874099249",
    appId: "1:480874099249:web:1553ef6e730ed23ea55b10"
  };



const config = {
    apiKey: "AIzaSyAZSpJfkUE5e2yoiKIX9qj80qMK_KUuCtg",
    authDomain: "dopestar-4bfa7.firebaseapp.com",
    databaseURL: "https://dopestar-4bfa7.firebaseio.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();