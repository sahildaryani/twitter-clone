import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCmku3umWMVKxKSe7z6n4TN3hMhmelkh5M",
    authDomain: "twitter-clone-64d89.firebaseapp.com",
    projectId: "twitter-clone-64d89",
    storageBucket: "twitter-clone-64d89.appspot.com",
    messagingSenderId: "302496507032",
    appId: "1:302496507032:web:58e398e729141955331ced"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;