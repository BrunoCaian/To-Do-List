
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9qUgcT57rQHjWDyI6q2wh9zFZTwoOzKQ",
  authDomain: "to-do-list-87b48.firebaseapp.com",
  projectId: "to-do-list-87b48",
  storageBucket: "to-do-list-87b48.firebasestorage.app",
  messagingSenderId: "271235174752",
  appId: "1:271235174752:web:be13c0386aa56d07618e05",
  measurementId: "G-7S8JJQB9HX"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };


  
  