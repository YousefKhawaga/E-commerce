import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAC-VeI_PyU2d2jHbdUONjUzBEI7nyQH_M",
    authDomain: "e-commerce-1588a.firebaseapp.com",
    databaseURL: "https://e-commerce-1588a.firebaseio.com",
    projectId: "e-commerce-1588a",
    storageBucket: "e-commerce-1588a.appspot.com",
    messagingSenderId: "103879200028",
    appId: "1:103879200028:web:d4269b52b1032867703ed9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;