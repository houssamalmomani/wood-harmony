import { getDocs, orderBy, query, where } from 'firebase/firestore';
import ProductsList from '../../components/products/ProductList';
import { itemsCol } from '../api/firebaseConfig';
import { typeItems } from '../all-products';
export async function getStaticProps() {
	const q = query(
		itemsCol,
		where('category', '==', 'neck-laces'),
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
		},
		// revalidate: 5,
	};
}
export default function necklaces(props: typeItems) {
	return <ProductsList items={props.items} />;
}
