import firebase from "firebase";

//firebase config
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCl6rARAjclcQ3A14qx3c59rf1IY7fj4YU",
        authDomain: "messenger-clone-f1eea.firebaseapp.com",
        databaseURL: "https://messenger-clone-f1eea.firebaseio.com",
        projectId: "messenger-clone-f1eea",
        storageBucket: "messenger-clone-f1eea.appspot.com",
        messagingSenderId: "470603961198",
        appId: "1:470603961198:web:0c12d291f0e9a6a741a77f"
     
});

const db = firebaseApp.firestore();
export default db;