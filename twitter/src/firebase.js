import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVEsKf0cKAIdJT9p32VLFNtbwt3fWPjMM",
  authDomain: "twitter-9a13f.firebaseapp.com",
  projectId: "twitter-9a13f",
  storageBucket: "twitter-9a13f.appspot.com",
  messagingSenderId: "541920265955",
  appId: "1:541920265955:web:cb4cde6efa9f484b4327d6"
};

  const firebaseApp = firebase.initializeApp (firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

  