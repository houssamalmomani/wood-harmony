import Head from 'next/head';
import Category from '../../components/categories/Category';
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
			<Category />
		</>
	);
}
