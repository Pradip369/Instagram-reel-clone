import firebase from 'firebase'

const FirebaseApp = firebase.initializeApp({

});

const db = FirebaseApp.firestore();

export default db;