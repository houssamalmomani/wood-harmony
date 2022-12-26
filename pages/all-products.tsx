import Head from 'next/head';
import FixedNav from '../components/ui/FixedNav';
import AllProducts from '../components/products/AllProducts';
import ProductsList from '../components/products/ProductList';
import hand from '../public/handb2.jpg';

const DUMMY_DATA = [
	{
		id: '1',
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
		title: 'woody necklace',
		category: 'neck-laces',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '4',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		price: '14.0',
	},
	{
		id: '5',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '5',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '5',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '5',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '5',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
	{
		id: '5',
		image: hand,
		title: 'key chains',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		price: '14.0',
	},
];
export default function allProducts() {
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
			<AllProducts />
			<ProductsList items={DUMMY_DATA} />
		</>
	);
}
