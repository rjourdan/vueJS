import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAIsDFNBm8HT_kPq_4opRjQHDFS67lcGFc",
    authDomain: "ninja-smoothies-25c18.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-25c18.firebaseio.com",
    projectId: "ninja-smoothies-25c18",
    storageBucket: "ninja-smoothies-25c18.appspot.com",
    messagingSenderId: "337197149805"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings( { timestampsInSnapshots: true})

  //export firestore database
  export const db = firebaseApp.firestore()
  export const auth = firebaseApp.auth()