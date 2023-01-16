import Head from 'next/head';
import Categories from '../../components/categories/Categories';

export default function products() {
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>

			<Categories />
		</>
	);
}
