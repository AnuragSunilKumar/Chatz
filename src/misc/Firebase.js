import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: "AIzaSyApzO0kARODyaWgWs6RA0k3YOSxEu_n8wA",
  authDomain: "chatz-web-app.firebaseapp.com",
  databaseURL: "https://chatz-web-app-default-rtdb.firebaseio.com",
  projectId: "chatz-web-app",
  storageBucket: "chatz-web-app.appspot.com",
  messagingSenderId: "907778751165",
  appId: "1:907778751165:web:5cb86aa9588c7ece8995d4"
};

export const fcmVapidKey =
  'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
