import { getDocs, query, where } from 'firebase/firestore';
import ProductsList from '../../components/products/ProductList';
import { itemsCol } from '../api/products';
import { typeItems } from '../all-products';
export async function getStaticProps() {
	const q = query(itemsCol, where('category', '==', 'key-chains'));
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
export default function keychains(props: typeItems) {
	return <ProductsList items={props.items} />;
}
