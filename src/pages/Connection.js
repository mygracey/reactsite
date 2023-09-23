

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIwzaTMW5DPqTRuVtcUWEb0I-Mxp8b5q4",
  authDomain: "testauth2-df6a1.firebaseapp.com",
  projectId: "testauth2-df6a1",
  storageBucket: "testauth2-df6a1.appspot.com",
  messagingSenderId: "413773750402",
  appId: "1:413773750402:web:008ea800ac7fa73e6c549b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider).then((result)=>{
    const name=result.user.displayName
    const email=result.user.email
    const profilepic=result.user.photoURL

    // store data in local storage

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("profilepic",profilepic)

  }).catch((error)=>{
    console.log(error)
  })
}






  




