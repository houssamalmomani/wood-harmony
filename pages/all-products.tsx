import Head from 'next/head';
import ProductsList from '../components/products/ProductList';
import { db } from './api/firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export type typeItems = {
	items: [
		{
			id: string;
			image: string[];
			title: string;
			category: string;
			description: string;
			price: number;
		}
	];
};

export async function getStaticProps({ locale }) {
	const itemsCol = collection(db, 'items');
	const q = query(itemsCol, orderBy('timestamp', 'desc'));
	const items = await getDocs(q);

	return {
		props: {
			items: items.docs.map((doc) => ({
				id: doc.id,
				category: doc.data().category,
				description: doc.data().description,
				image: doc.data().image,
				price: doc.data().price,
				title: doc.data().title,
				timestamp: doc.data().timestamp?.toDate().getTime(),
			})),
			...(await serverSideTranslations(locale, ['common', 'allPro'], null, [
				'en',
				'ar',
			])),
		},
		revalidate: 5,
	};
}

export default function AllProducts(props: typeItems) {
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

			<ProductsList
				items={props.items}
				locale={props.locale}
			/>
		</>
	);
}
