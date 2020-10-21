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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("there was an error ", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;