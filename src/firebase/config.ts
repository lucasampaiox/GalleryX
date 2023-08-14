// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB32157bXXAF1H4pSt4J0CBVwgrv17ye-o",
  authDomain: "image-gallery-project.firebaseapp.com",
  projectId: "image-gallery-project",
  storageBucket: "image-gallery-project.appspot.com",
  messagingSenderId: "712340859833",
  appId: "1:712340859833:web:79c9e8e11bf36141a3e468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app);
const db = getFirestore(app)
export{auth, storage, db};