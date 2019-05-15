import { initializeApp } from "firebase/app";
import "firebase/database";

const firebase = initializeApp({
  apiKey: "AIzaSyD3xNyjTqaLGhFUYUy_JbJhLe_h7lIaGm8",
  authDomain: "alexandrtovmach-1534514719962.firebaseapp.com",
  databaseURL: "https://alexandrtovmach-1534514719962.firebaseio.com",
  projectId: "alexandrtovmach-1534514719962",
  storageBucket: "alexandrtovmach-1534514719962.appspot.com",
  messagingSenderId: "1055669266571"
});

const databaseRef = firebase.database().ref();

export function getAllByCategory(category = "", limit = 10) {
  return databaseRef
    .child(category)
    .limitToLast(limit)
    .once("value")
    .then(snapshot => snapshot.val())
    .catch(err => console.error("getAllByCategory", err));
}

export function setByCategory(category = "", data = {}) {
  return databaseRef
    .child(category)
    .set(data)
    .then(snapshot => snapshot)
    .catch(err => console.error("setByCategory", err));
}
