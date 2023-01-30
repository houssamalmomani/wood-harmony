import { onValue, ref, set } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { dbR, snapshot } from './firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// };
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const data: any = req.body;
		const id = new Date();
		await set(ref(dbR, `/orders/${id}`), JSON.parse(data));
	}
	res.status(200).json({
		message:
			'thank you for choose our product we will contact you as soon as possible',
	});
	// if (req.method === 'GET') {
	// 	const ordersRef = ref(dbR, '/orders/');
	// 	onValue(ordersRef, (snapshot) => {
	// 		const data = snapshot.val();
	// 	});
	// 	res.status(200).json({ orders: ordersRef });
	// }
}
