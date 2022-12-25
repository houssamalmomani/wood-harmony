import About from '../components/layout/About';
import Categories from '../components/categories/Categories';
import Head from 'next/head';
import CustomIt from '../components/layout/CustomIt';
import Hero from '../components/layout/Hero';

const DUMMY = [
	{
		id: '1',
		title: 'hand',
		image: '/img5.jpg',
		category: 'hand-bracelets',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: '2',
		title: 'hand',
		image: '/img1R.jpg',
		category: 'hand-bracelets',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: '3',
		title: 'woody necklace',
		image: '/img6.jpg',
		category: 'neck-laces',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: '4',
		title: 'key chains',
		image: '/img2.jpg',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
	},
	{
		id: '5',
		title: 'key chains',
		image: '/img4.jpg',
		category: 'key-chains',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>
			<Hero />
			<About />
			<Categories />
			<CustomIt />
		</>
	);
}
