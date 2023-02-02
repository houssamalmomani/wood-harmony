import { getDocs, orderBy, query, where } from 'firebase/firestore';
import ProductsList from '../../components/products/ProductList';
import { itemsCol } from '../api/firebaseConfig';
import { typeItems } from '../all-products';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export async function getStaticProps({ locale }: any) {
	const q = query(
		itemsCol,
		where('category', '==', 'hand-bracelets'),
		orderBy('timestamp', 'desc')
	);
	const items = await getDocs(q);
	return {
		props: {
			items: items.docs.map((doc: any) => ({
				id: doc.id,
				description: doc.data().description,
				image: doc.data().image,
				price: doc.data().price,
				title: doc.data().title,
			})),
			locale,
			...(await serverSideTranslations(locale, ['allPro', 'common'], null)),
		},
		// revalidate: 5,
	};
}
export default function handBracelets(props: typeItems) {
	return <ProductsList items={props.items} />;
}
