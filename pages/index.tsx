import About from '../components/layout/About';
import Category from '../components/categories/Category';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';

const DUMMY = [
	{
		id: 1,
		title: 'woody necklace',
		image:
			'https://i.etsystatic.com/12328946/r/il/71f3ec/1362088570/il_794xN.1362088570_lmh2.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa autem dolores corporis culpa vel pariatur id ipsum dolor commodi!',
	},
	{
		id: 2,
		title: 'woody necklace',
		image:
			'https://i.etsystatic.com/12328946/r/il/71f3ec/1362088570/il_794xN.1362088570_lmh2.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa autem dolores corporis culpa vel pariatur id ipsum dolor commodi!',
	},
	{
		id: 3,
		title: 'woody necklace',
		image:
			'https://i.etsystatic.com/12328946/r/il/71f3ec/1362088570/il_794xN.1362088570_lmh2.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa autem dolores corporis culpa vel pariatur id ipsum dolor commodi!',
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
			<About />
			<Category />
		</>
	);
}
