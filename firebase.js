import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnEhtWkY6YTxjSkmYp-b6arK8KBbwfGl8",
  authDomain: "amzn-2-yt-56c86.firebaseapp.com",
  projectId: "amzn-2-yt-56c86",
  storageBucket: "amzn-2-yt-56c86.firebasestorage.app",
  messagingSenderId: "593503111533",
  appId: "1:593503111533:web:6478d5f38cd7ab5c58b264",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
