import { getDocs, query, where } from 'firebase/firestore';
import ProductsList from '../../components/products/ProductList';
import { itemsCol } from '../api/products';
import { typeItems } from '../all-products';
export async function getStaticProps() {
	const q = query(itemsCol, where('category', '==', 'neck-laces'));
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
	return (
		<>
			<div className="md:my-64 max-w-7xl mx-auto ">
				<ProductsList items={props.items} />
			</div>
		</>
	);
}
