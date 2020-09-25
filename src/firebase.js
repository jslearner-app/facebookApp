import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    
        apiKey: "AIzaSyDLgjd5ZpeYLSjrkaNlmL67wrw-lyWcLmM",
        authDomain: "facebook-messanger-b051c.firebaseapp.com",
        databaseURL: "https://facebook-messanger-b051c.firebaseio.com",
        projectId: "facebook-messanger-b051c",
        storageBucket: "facebook-messanger-b051c.appspot.com",
        messagingSenderId: "160767697032",
        appId: "1:160767697032:web:45f8e209c9b699df863f3d",
        measurementId: "G-G2X0VCM8CV"
    
});

const db = firebaseApp.firestore();

export default db;