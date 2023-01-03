import { MongoClient } from 'mongodb';
import Head from 'next/head';
import ProductsList from '../components/products/ProductList';
import { StaticImageData } from 'next/image';

export type typeItems = {
	id: string;
	image: StaticImageData[];
	title: string;
	category: string;
	description: string;
	price: string;
}[];

export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://Houssam:pQmYqcQBSyHwcGa8@cluster0.qat5w5x.mongodb.net/items?retryWrites=true&w=majority'
	);
	const db = client.db();

	const itemsCollection = db.collection('items');

	const items = await itemsCollection.find().toArray();
	client.close();
	return {
		props: {
			items: items.map((item) => ({
				id: item._id.toString(),
				title: item.title,
				image: item.image,
				category: item.category,
				description: item.description,
				price: item.price,
			})),
		},
		// revalidate: 5,
	};
}
console.log('data');
export default function AllProducts(props: { items: typeItems }) {
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>

			<div className="my-64 max-w-7xl mx-auto">
				<ProductsList items={props.items} />
			</div>
		</>
	);
}
