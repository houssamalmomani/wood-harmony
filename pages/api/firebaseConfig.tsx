import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDH9rCqGaLkrTYezdvncNcfn3nUKXnKbUM',
	authDomain: 'wood-harmony-9b998.firebaseapp.com',
	databaseURL: 'https://wood-harmony-9b998-default-rtdb.firebaseio.com',
	projectId: 'wood-harmony-9b998',
	storageBucket: 'wood-harmony-9b998.appspot.com',
	messagingSenderId: '1047046440815',
	appId: '1:1047046440815:web:33d4d2750b86a0f791ca9a',
	measurementId: 'G-2P6PEG5HST',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dbR = getDatabase();
const storage = getStorage();
const itemsCol = collection(db, 'items');
const auth = getAuth(app);
const snapshot = getDocs(itemsCol);
export { db, storage, itemsCol, dbR, snapshot, auth };
