import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2qBQKQERj8HTddUpJNCnUSUP7nuntv-g",
  authDomain: "ninja-chat-1c89b.firebaseapp.com",
  databaseURL: "https://ninja-chat-1c89b.firebaseio.com",
  projectId: "ninja-chat-1c89b",
  storageBucket: "ninja-chat-1c89b.appspot.com",
  messagingSenderId: "585155443997"
};

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings( { timestampsInSnapshots: true})

  //export firestore database
  export const db = firebaseApp.firestore()
  export const auth = firebaseApp.auth()