import Head from 'next/head';
import Categories from '../../components/categories/Categories';
import NavBar from '../../components/ui/NavBar';
import FixedNav from '../../components/ui/FixedNav';

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
			<FixedNav />
			<Categories />
		</>
	);
}
