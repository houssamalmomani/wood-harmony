import { doc, getDoc } from 'firebase/firestore';
import ProductDetails from '../../components/products/ProductDetails';
import { db, snapshot } from '../api/products';
import Head from 'next/head';
import { typeDetails } from '../../components/products/ProductList';
import DeleteItemDb from '../../components/admin/DeleteItemDb';

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
	const items = q.data();
	const singleItem = JSON.parse(JSON.stringify(items));
	console.log(singleItem, 'items');
	return {
		props: {
			singleItem,
			productId,
		},
		// revalidate: 5,
	};
}

function ProductId(props: { singleItem: typeDetails; productId: string }) {
	return (
		<>
			<Head>
				<title>{props.singleItem.title}</title>
			</Head>
			<ProductDetails
				item={props.singleItem}
				id={props.productId}
			/>
			<div className="my-10 max-w-xs mx-auto">
				<DeleteItemDb id={props.productId} />
			</div>
		</>
	);
}
export default ProductId;
