import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBA1L7mHzIQzp3HogWJiHVEeD5BASwA6r8",
  authDomain: "iedccecbackend.firebaseapp.com",
  projectId: "iedccecbackend",
  storageBucket: "iedccecbackend.appspot.com",
  messagingSenderId: "1082480249320",
  appId: "1:1082480249320:web:1815d2aa5430ca7031fc5d",
  measurementId: "G-8708CF7WK3",
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()

export { firestore }
