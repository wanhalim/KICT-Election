import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDvcV5r6G_q-8nMZWLyVruuKfsDwoOWM3Y",
  authDomain: "student-database-d0cfd.firebaseapp.com",
  databaseURL: "https://student-database-d0cfd.firebaseio.com",
  projectId: "student-database-d0cfd",
  storageBucket: "student-database-d0cfd.appspot.com",
  messagingSenderId: "438956803849",
  appId: "1:438956803849:web:44f0f7eb1f088c4e0cb5d8",
  measurementId: "G-NYWF5EME2R"
};
  var app = firebase.initializeApp(firebaseConfig);
  var fire = app.database();
  var storage = app.storage()

  export { fire, app, storage}