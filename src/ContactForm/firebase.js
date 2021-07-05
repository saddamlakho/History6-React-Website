import firebase from "firebase";

var firebaseApp = firebase.initializeApp({


    apiKey: "AIzaSyCtD4GflHcG9t4wNMDVUTABIBtU_0XaM-A",
    authDomain: "history-database-3ff69.firebaseapp.com",
    projectId: "history-database-3ff69",
    storageBucket: "history-database-3ff69.appspot.com",
    messagingSenderId: "115425308177",
    appId: "1:115425308177:web:aa81f6d769dfe30dee0bb0"
  
})


var db = firebaseApp.firestore();

export {db};


