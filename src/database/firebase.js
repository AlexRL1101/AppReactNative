import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const db = firebase.firestore();
const user = firebase.auth();

export default {
  user,
  db
};