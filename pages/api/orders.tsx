import { onValue, ref, set } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { db, dbR } from './products';
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
	switch (req.method) {
		case 'POST':
			const data: any = req.body;
			await addDoc(collection(db, 'orders'), {
				tel: data.tel,
				name: data.name,
				address: data.address,
				orderItems: data.orderItems,
				images: data.images,
				category: data.category,
			});
			break;

		// onValue(ref(dbR), (snapshot) => {
		//   const data = snapshot.val();
		// });
		default:
			console.log('ok');
			break;
	}
}
