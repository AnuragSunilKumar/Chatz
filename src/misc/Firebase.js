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
  'BBv_CLb2_qF8muVsWon5SFXzJnKCnv-rnqBRVrIrj2PV6mTOhiD3UiJfZ2r2iTHmENGF916r_OsOtUF7z1XDH5E';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('us-east4');

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
