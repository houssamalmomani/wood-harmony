import { MongoClient } from 'mongodb';
import Head from 'next/head';
import FixedNav from '../components/ui/FixedNav';
import ProductsList from '../components/products/ProductList';
import hand from '../public/handb2.jpg';
import neck from '../public/neck1.jpg';
import key from '../public/keyD1.jpg';
import { StaticImageData } from 'next/image';
import { type } from 'os';

export type typeItems = {
	id: string;
	image: StaticImageData[];
	title: string;
	category: string;
	description: string;
	price: string;
}[];
// export const DUMMY_DATA: typeItems = [

// 	{
// 		id: '3',
// 		image: [hand, key, neck],
// 		title: 'hand',
// 		category: 'hand-bracelets',
// 		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 		price: '14.0',
// 	},
// 	{
// 		id: '4',
// 		image: [neck, key, neck],
// 		title: 'woody necklace',
// 		category: 'neck-laces',
// 		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
// 		price: '14.0',
// 	},

// 	{
// 		id: '7',
// 		image: [key, key, neck],
// 		title: 'key chains',
// 		category: 'key-chains',
// 		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
// 		price: '14.0',
// 	},

// ];
export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://Houssam:@cluster0.qat5w5x.mongodb.net/items?retryWrites=true&w=majority'
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
			<FixedNav />
			<div className="my-64 max-w-7xl mx-auto">
				<ProductsList items={props.items} />
			</div>
		</>
	);
}
