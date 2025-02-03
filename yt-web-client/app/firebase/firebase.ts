// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithPopup, 
        getAuth, 
        GoogleAuthProvider, 
        onAuthStateChanged, 
        User } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW3vJk2Lhw37-V48lsYk42-2zsaFqxydc",
  authDomain: "io-yt-clone.firebaseapp.com",
  projectId: "io-yt-clone",
  appId: "1:223196079553:web:6ab450dec2b29d677f7b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * 
 * @returns 
 */
export function signInWithGoogle () {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * 
 * @returns 
 */
export function signOut() {
  return auth.signOut();
}

/**
 * 
 * @param callback 
 * @returns 
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}