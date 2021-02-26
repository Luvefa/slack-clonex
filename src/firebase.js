import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD8ZMDeRXAc1uyrswybZkR4w8gf6TtHn2s",
    authDomain: "slack-clonex.firebaseapp.com",
    projectId: "slack-clonex",
    storageBucket: "slack-clonex.appspot.com",
    messagingSenderId: "113545124134",
    appId: "1:113545124134:web:89e7dcef44c157e840c9e7"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db } ;