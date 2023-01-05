// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDH9rCqGaLkrTYezdvncNcfn3nUKXnKbUM',
	authDomain: 'wood-harmony-9b998.firebaseapp.com',
	projectId: 'wood-harmony-9b998',
	storageBucket: 'wood-harmony-9b998.appspot.com',
	messagingSenderId: '1047046440815',
	appId: '1:1047046440815:web:33d4d2750b86a0f791ca9a',
	measurementId: 'G-2P6PEG5HST',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsCol = collection(db, 'items');
const snapshot = getDocs(itemsCol);

export { db, app, snapshot, itemsCol };
