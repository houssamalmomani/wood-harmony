import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	getDocs,
	getFirestore,
	updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';
import { serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
// export default async function handler(req, res) {
// 	const data = req.body;
// 	if (req.method === 'POST') {
// 		const docRef = await addDoc(itemsCol, {
// 			category: data.category,
// 			title: data.title,
// 			description: data.description,
// 			weight: data.weight,
// 			dimensions: data.dimensions,
// 			price: data.price,
// 			timestamp: serverTimestamp(),
// 		});
// 		await Promise.all(
// 			data.images.map((image: any) => {
// 				const imageRef = ref(storage, `products/${docRef.id}/${image.name}`);
// 				uploadBytes(imageRef, image, 'data_url').then(async () => {
// 					const downloadURL = await getDownloadURL(imageRef);
// 					await updateDoc(doc(itemsCol, docRef.id), {
// 						image: arrayUnion(downloadURL),
// 					});
// 					// setProgress(false);
// 				});
// 			})
// 		);
// 	}
// }
