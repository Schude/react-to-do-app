import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWCn4HMd4iq8NSMXugp1xVfPm3GnR-xdU",
  authDomain: "react-to-do-app-5d4d6.firebaseapp.com",
  projectId: "react-to-do-app-5d4d6",
  storageBucket: "react-to-do-app-5d4d6.appspot.com",
  messagingSenderId: "719185808914",
  appId: "1:719185808914:web:c2bfb7f830d6b2594812cb",
};
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}

firebase.auth();
export const db = firebase.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  firebaseConfig,
};
