import firebase from 'firebase';






const config = {
    apiKey: "enter your key",
    authDomain: "enter your domain",
    databaseURL: "your database url"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();
