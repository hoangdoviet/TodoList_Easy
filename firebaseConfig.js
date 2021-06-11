import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0_1Fw4SlNTBZaTe7aizuIDHdPf5MNdOs",
  authDomain: "todolisteasy.firebaseapp.com",
  projectId: "todolisteasy",
  storageBucket: "todolisteasy.appspot.com",
  messagingSenderId: "38984264878",
  appId: "1:38984264878:web:5fd1799f29f831d1af113f",
  measurementId: "G-G0F81T2P0D"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const tasksCollection = db.collection('tasks');
const doneCollection = db.collection('done');
const usersCollection = db.collection('users');

const auth = firebase.auth();

export {
    firebase,
    db,
    tasksCollection,
    doneCollection,
    usersCollection,
    auth
}