import Head from 'next/head';
import FixedNav from '../components/ui/FixedNav';
import ProductsList from '../components/products/ProductList';
import hand from '../public/handb2.jpg';
import neck from '../public/neck1.jpg';
import key from '../public/keyD1.jpg';
import { itemsProps } from '../components/products/ProductList';
export const DUMMY_DATA = [
	{
		id: '0',
		image: hand,
		title: 'hand',
		category: 'hand-bracelets',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '2',
		image: hand,
		title: 'hand',
		category: 'hand-bracelets',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '2',
		image: hand,
		title: 'hand',
		category: 'hand-bracelets',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '3',
		image: hand,
		title: 'hand',
		category: 'hand-bracelets',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '4',
		image: neck,
		title: 'woody necklace',
		category: 'neck-laces',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		price: '14.0',
	},
	{
		id: '5',
		image: neck,
		title: 'woody necklace',
		category: 'neck-laces',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '6',
		image: neck,
		title: 'woody necklace',
		category: 'neck-laces',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '7',
		image: key,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '8',
		image: key,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '9',
		image: key,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '10',
		image: key,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
];
export async function getStaticProps() {
	const res = await fetch(
		'https://wood-harmony-6004b-default-rtdb.firebaseio.com/items.json'
	);
	const data = await res.json();
	return {
		props: {
			items: DUMMY_DATA,
		},
		// revalidate: 5,
	};
}
console.log('data');
export default function allProducts(props: itemsProps) {
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
