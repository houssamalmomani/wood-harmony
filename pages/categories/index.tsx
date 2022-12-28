import Head from 'next/head';
import Categories from '../../components/categories/Categories';
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
			<div className="md:my-64">
				<Categories />
			</div>
		</>
	);
}
