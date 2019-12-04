import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDZ9zRscfsenY6-0QUJP1zBRp-KWinFCSE",
    authDomain: "laliga-live-88e84.firebaseapp.com",
    databaseURL: "https://laliga-live-88e84.firebaseio.com",
    projectId: "laliga-live-88e84",
    storageBucket: "laliga-live-88e84.appspot.com",
    messagingSenderId: "251162863376",
    appId: "1:251162863376:web:7cc92d014495ac48a5e795"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
