import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDtcUDCA4pU8F1dLv9m4ZP9qBoKg6O2gfc",
  authDomain: "myanmar-proverbs.firebaseapp.com",
  databaseURL: "https://myanmar-proverbs.firebaseio.com",
  projectId: "myanmar-proverbs",
  storageBucket: "myanmar-proverbs.appspot.com",
  messagingSenderId: "750301861530",
  appId: "1:750301861530:web:29bd1f1b1d8547acd37123"

};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase