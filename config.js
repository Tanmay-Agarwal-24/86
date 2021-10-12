import firebase from 'firebase';

// add SDK Firebase
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
export  const firebaseConfig = {
    apiKey: "AIzaSyAMaC5nRrUGJphaGHYqdE3EC9x0d0c8TM8",
    authDomain: "storytelling-app-5179b.firebaseapp.com",
    databaseURL: "https://storytelling-app-5179b-default-rtdb.firebaseio.com",
    projectId: "storytelling-app-5179b",
    storageBucket: "storytelling-app-5179b.appspot.com",
    messagingSenderId: "1080291967569",
    appId: "1:1080291967569:web:e8f3c9727d912ed2522e70",
    measurementId: "G-9P4YEPT02H"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

  

export default firebase.database();