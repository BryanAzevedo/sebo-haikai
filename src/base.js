import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAAKcSs36wqeahlXCIEBKzxrXsrqC8rkw0',
  authDomain: 'sebo-backend.firebaseapp.com',
  projectId: 'sebo-backend',
  storageBucket: 'sebo-backend.appspot.com',
  messagingSenderId: '782182757556',
  appId: '1:782182757556:web:c0edd96c186eb8194ad3e1',
  measurementId: 'G-K5T95CGWDS',
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
