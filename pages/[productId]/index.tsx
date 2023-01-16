import { doc, getDoc } from 'firebase/firestore';
import ProductDetails from '../../components/products/ProductDetails';
import { db, snapshot } from '../api/products';
import Head from 'next/head';
import { typeDetails } from '../../components/products/ProductList';

export async function getStaticPaths() {
	const idItems = await snapshot;

	return {
		paths: idItems.docs.map((item) => ({
			params: { productId: item.id.toString() },
		})),
		fallback: false,
	};
}

export async function getStaticProps(context: any) {
	const productId: any = context.params.productId;
	const select = doc(db, 'items', productId);
	const q = await getDoc(select);
	const singleItem = q.data();

	return {
		props: {
			singleItem,
			productId,
		},
		// revalidate: 5,
	};
}

function ProductId(props: { singleItem: typeDetails; productId: string }) {
	console.log(props.singleItem, 'this is the single product that you return ');

	return (
		<>
			<Head>
				<title>{props.singleItem.title}</title>
			</Head>
			<ProductDetails
				item={props.singleItem}
				id={props.productId}
			/>
		</>
	);
}
export default ProductId;
