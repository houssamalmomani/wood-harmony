import About from '../components/layout/About';
import Categories from '../components/categories/Categories';
import Head from 'next/head';
import CustomIt from '../components/layout/CustomIt';
import Hero from '../components/layout/Hero';

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

			<Categories />

			<CustomIt />
		</>
	);
}
