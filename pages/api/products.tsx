// import { MongoClient } from 'mongodb';

// async function apiHandler(req: any, res: any) {
// 	if (req.method === 'GET') {
// 		const data = req.body;

// 		const client = await MongoClient.connect(
// 			'mongodb+srv://Houssam:aHkTd6R465IIgOvA@cluster0.qat5w5x.mongodb.net/items?retryWrites=true&w=majority'
// 		);
// 		const db = client.db();

// 		const itemsCollection = db.collection('items');
// 		const result = await itemsCollection.insertOne(data);

// 		client.close();

// 		res.status(201).json({ message: 'item inserted!' });
// 	}
// }
// export default apiHandler;
