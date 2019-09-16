import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBgXx3ksoqP2SdRQMLGOW86VF9hGqBreOg",
  authDomain: "mytek2d.firebaseapp.com",
  databaseURL: "https://mytek2d.firebaseio.com",
  projectId: "mytek2d",
  storageBucket: "  mytek2d.appspot.com",
  messagingSenderId: "158123113885",
  appId: "1:158123113885:web:bc51f4475c4d0efa4c4374"
};

firebase.initializeApp(firebaseConfig);

export default firebase;