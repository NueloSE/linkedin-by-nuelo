import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjM5BOPWxLORmrlezc9W-uiGoB1SwZCRI',
  authDomain: 'linkedin-clone-6aae1.firebaseapp.com',
  projectId: 'linkedin-clone-6aae1',
  storageBucket: 'linkedin-clone-6aae1.appspot.com',
  messagingSenderId: '762857701664',
  appId: '1:762857701664:web:3d14f3217d85930be79745',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
