import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import ProductDetails from '../../components/products/ProductDetails';
import { db, itemsCol, snapshot } from '../api/products';
import Head from 'next/head';

export async function getStaticPaths() {
	const idItems = collection(db, 'items');
	const items = await getDocs(idItems);

	return {
		paths: items.docs.map((item) => ({
			params: { productId: item.id.toString() },
		})),
		fallback: true,
	};
}

export async function getStaticProps(context: any) {
	const productId: any = context.params.productId;
	const select = doc(db, 'items', productId);
	const q = await getDoc(select);
	const items = q.data();

	return {
		props: {
			items,
		},
		// revalidate: 5,
	};
}

function ProductId(props: { items: { image: any; title: string; id: any } }) {
	console.log(props.items, 'ashdfja');

	return (
		<>
			<Head>
				<title></title>
			</Head>
			<ProductDetails items={props.items} />
		</>
	);
}
export default ProductId;
