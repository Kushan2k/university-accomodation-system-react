import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
export const firebaseConfig = {
  apiKey: "AIzaSyA9ju82jvrQKSueiBYGYdngONggySVFCzg",
  authDomain: "accomodation-system.firebaseapp.com",
  projectId: "accomodation-system",
  storageBucket: "accomodation-system.appspot.com",
  messagingSenderId: "1070016371700",
  appId: "1:1070016371700:web:358e58d222ed4bb59877a1",
  measurementId: "G-HEBWLBPQPJ",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { app, auth }
