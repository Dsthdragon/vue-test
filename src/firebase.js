import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDlpDxTt5a_q9JKunGjyOLEG1-F6NECWPo",
    authDomain: "vue-test-abf59.firebaseapp.com",
    databaseURL: "https://vue-test-abf59-default-rtdb.firebaseio.com",
    projectId: "vue-test-abf59",
    storageBucket: "vue-test-abf59.appspot.com",
    messagingSenderId: "1075514616492",
    appId: "1:1075514616492:web:218452f26dc967d8498d09",
    measurementId: "G-8MWYT9EH5F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const userCollections = db.ref("users");

export {
    db,
    userCollections
}