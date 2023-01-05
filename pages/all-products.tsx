import Head from 'next/head';
import ProductsList from '../components/products/ProductList';
import { snapshot } from './api/products';

export type typeItems = {
	id: string;
	image: string;
	title: string;
	category: string;
	description: string;
	price: number;
}[];

export async function getStaticProps() {
	const items = await snapshot;

	return {
		props: {
			items: items.docs.map((doc) => ({
				id: doc.id,
				category: doc.data().category,
				description: doc.data().description,
				image: doc.data().image,
				price: doc.data().price,
				title: doc.data().title,
			})),
		},
		// revalidate: 5,
	};
}
console.log('data');
export default function AllProducts(props: { items: typeItems }) {
	console.log(props.items);
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
