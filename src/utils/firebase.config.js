import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnf6GaetVqXUznYS25LayLK5qMSotEKVs',
  authDomain: 'fir-auth-8ea46.firebaseapp.com',
  projectId: 'fir-auth-8ea46',
  storageBucket: 'fir-auth-8ea46.appspot.com',
  messagingSenderId: '1021344532306',
  appId: '1:1021344532306:web:8fefe03bcb42abed56dc8b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
