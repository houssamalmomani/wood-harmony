import { ref, set } from 'firebase/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { dbR } from './firebaseConfig';

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
}
