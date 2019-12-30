import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAwqnN6Af11aZger6uD8L1Zin9lCK7Xmrc',
  authDomain: 'crown-db-ca268.firebaseapp.com',
  databaseURL: 'https://crown-db-ca268.firebaseio.com',
  projectId: 'crown-db-ca268',
  storageBucket: 'crown-db-ca268.appspot.com',
  messagingSenderId: '245130601575',
  appId: '1:245130601575:web:c1c42e5a096b98dfce60c2',
  measurementId: 'G-8PTZFJHQWL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
