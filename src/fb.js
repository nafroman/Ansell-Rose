
import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCXl3SOjd5ow_PZCDAOA5zddnkXTuw7yDI",
    authDomain: "asnellrose.firebaseapp.com",
    databaseURL: "https://asnellrose.firebaseio.com",
    projectId: "asnellrose",
    storageBucket: "asnellrose.appspot.com",
    messagingSenderId: "569182022274",
    appId: "1:569182022274:web:1bb9a1993088988f"
}


  firebase.initializeApp(config);
  const db = firebase.firestore();
 // db.settings({timestampsInSnapshots: true})
  export default db;




  
