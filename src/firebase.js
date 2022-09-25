// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { userHandle } from 'utils'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEWQ7654DEO-XW8XpCWspAe4iXhxOjxcI',
  authDomain: 'barskesen-instagram.firebaseapp.com',
  projectId: 'barskesen-instagram',
  storageBucket: 'barskesen-instagram.appspot.com',
  messagingSenderId: '914522083512',
  appId: '1:914522083512:web:0c242c635d5464654ba44d',
  measurementId: 'G-TY4LTH22YX'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()

onAuthStateChanged(auth, user => {
  userHandle(user || false)
})

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log(response.user)
  } catch (error) {
    toast.error(error.code)
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    toast.error(error.code)
  }
}
