import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCMGY2acWazPso8B1gWou65ncbEwsnWlgU",
  authDomain: "tutorfinder-b5541.firebaseapp.com",
  projectId: "tutorfinder-b5541",
  databaseURL: "tutorfinder-b5541.firebaseio.com",
  storageBucket: "tutorfinder-b5541.appspot.com",
  messagingSenderId: "352365381156",
  appId: "1:352365381156:web:aa761e03732abc9ea47ab1"
};

// Initialize Firebase
// if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
// }

export default firebase.firestore();

 