import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbY5bEat1kzbjRfyS6cxoBGawgU2etWhM",
  authDomain: "ejenesis-a4351.firebaseapp.com",
  projectId: "ejenesis-a4351",
  storageBucket: "ejenesis-a4351.appspot.com",
  messagingSenderId: "949968200626",
  appId: "1:949968200626:web:c62c8c62936bfaf81afaab",
  measurementId: "G-XEM74B9ZQ5",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
