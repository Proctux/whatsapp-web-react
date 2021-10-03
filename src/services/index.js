import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBvRIT8nBMjhyfbKyv8uH8xMw_5oEQ1Gas',
  authDomain: 'whatsapp-web-react.firebaseapp.com',
  projectId: 'whatsapp-web-react',
  storageBucket: 'whatsapp-web-react.appspot.com',
  messagingSenderId: '570143304352',
  appId: '1:570143304352:web:1bff67e06715a606ccf7c5',
  measurementId: 'G-37WJDF22HF',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
