import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVmepZnHfrPYluDL8qMtaov63h6SXfQmE",
  authDomain: "novinarski-portal.firebaseapp.com",
  projectId: "novinarski-portal",
  storageBucket: "novinarski-portal.firebasestorage.app",
  messagingSenderId: "544913593138",
  appId: "1:544913593138:web:cfd03c5c7315100feb7d2b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);