import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDH9rCqGaLkrTYezdvncNcfn3nUKXnKbUM',
	authDomain: 'wood-harmony-9b998.firebaseapp.com',
	projectId: 'wood-harmony-9b998',
	storageBucket: 'wood-harmony-9b998.appspot.com',
	messagingSenderId: '1047046440815',
	appId: '1:1047046440815:web:33d4d2750b86a0f791ca9a',
	measurementId: 'G-2P6PEG5HST',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const itemsCol = collection(db, 'items');
const snapshot = getDocs(itemsCol);

export { db, app, snapshot, itemsCol };
