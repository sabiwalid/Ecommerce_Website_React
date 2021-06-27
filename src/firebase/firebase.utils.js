import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBb6QaGzP3IfGvtRznOiZEq7y9auCi9wAY",
  authDomain: "reactecommercedb-71981.firebaseapp.com",
  projectId: "reactecommercedb-71981",
  storageBucket: "reactecommercedb-71981.appspot.com",
  messagingSenderId: "334282010970",
  appId: "1:334282010970:web:cdd7d98807b7aae8b5c363",
  measurementId: "G-SKL2EKKBXB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
