import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUjYIBtEKqI_XSw7LCJ93kDeBlkvZkvZI",
  authDomain: "online-class-4e218.firebaseapp.com",
  databaseURL: "https://online-class-4e218-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-class-4e218",
  storageBucket: "online-class-4e218.appspot.com",
  messagingSenderId: "489947391901",
  appId: "1:489947391901:web:da95a9e6d37460ecf03174",
  measurementId: "G-NPXSJDP4E1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
