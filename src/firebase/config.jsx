import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAeDk_q7Ar4KfiTcbFSKNWqPVoceFbWmM',
  authDomain: 'brews-and-bites.firebaseapp.com',
  projectId: 'brews-and-bites',
  storageBucket: 'brews-and-bites.appspot.com',
  messagingSenderId: '941621262838',
  appId: '1:941621262838:web:389ec098b69cbe99e0efd7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
