// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyY9P22PLlGe4DxWKywcHBGdiiYEhNETQ",
  authDomain: "generative-ai-bd109.firebaseapp.com",
  projectId: "generative-ai-bd109",
  storageBucket: "generative-ai-bd109.appspot.com",
  messagingSenderId: "532992709592",
  appId: "1:532992709592:web:24a31fdcb0417bbf2b18ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;