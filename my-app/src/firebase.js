import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCjecVx6WNc-2qHTBMP4byxfGXb3SHNifk",
    authDomain: "notes-making-42e11.firebaseapp.com",
    projectId: "notes-making-42e11",
    storageBucket: "notes-making-42e11.appspot.com",
    messagingSenderId: "766757209823",
    appId: "1:766757209823:web:db5327934c84cf8f9f0b6a",
    databaseURL:"https://notes-making-42e11-default-rtdb.firebaseio.com"
  };

 export  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);