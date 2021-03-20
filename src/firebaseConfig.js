import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmnOy1sub1xwCnVv3FXEe5PmzmpJcuxIY",
  authDomain: "linkedinclone-4d05c.firebaseapp.com",
  projectId: "linkedinclone-4d05c",
  storageBucket: "linkedinclone-4d05c.appspot.com",
  messagingSenderId: "555852749661",
  appId: "1:555852749661:web:8ce215c3e7a4df7e1d26b4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
