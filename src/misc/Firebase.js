/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
  apiKey: "AIzaSyApzO0kARODyaWgWs6RA0k3YOSxEu_n8wA",
  authDomain: "chatz-web-app.firebaseapp.com",
  databaseURL: "https://chatz-web-app-default-rtdb.firebaseio.com",
  projectId: "chatz-web-app",
  storageBucket: "chatz-web-app.appspot.com",
  messagingSenderId: "907778751165",
  appId: "1:907778751165:web:5cb86aa9588c7ece8995d4"
};

const app = firebase.initializeApp(config);
export const auth =app.auth();
export const database = app.database();


