import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCvkvvXfCYzOAga6qAyHs7HvhybHMpu_lY',
  authDomain: 'crwn-db-a0e89.firebaseapp.com',
  projectId: 'crwn-db-a0e89',
  storageBucket: 'crwn-db-a0e89.appspot.com',
  messagingSenderId: '993299589758',
  appId: '1:993299589758:web:69bad40b75aeb6e328462f',
  measurementId: 'G-8F80MC6XPW',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
