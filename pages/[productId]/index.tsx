import { doc, getDoc } from 'firebase/firestore';
import ProductDetails from '../../components/products/ProductDetails';
import { db, snapshot } from '../api/firebaseConfig';
import Head from 'next/head';
import { typeDetails } from '../../components/products/ProductList';
import DeleteItemDb from '../../components/admin/DeleteItemDb';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticPaths({ locales }: any) {
	const idItems = await snapshot;
	const paths = idItems.docs.flatMap((item) => {
		return locales.map((locale: string) => {
			return {
				params: {
					productId: item.id.toString(),
				},
				locale: locale,
			};
		});
	});
	return {
		paths,

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
			...(await serverSideTranslations(
				context.locale,
				['productDetails', 'common'],
				null,
				['en', 'ar']
			)),
		},
		// revalidate: 5,
	};
}

function ProductId(props: {
	singleItem: typeDetails;
	productId: string;
	locale: string;
}) {
	const { status } = useSession();
	console.log(props.locale, 'locales');
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
				{status === 'authenticated' && <DeleteItemDb id={props.productId} />}
			</div>
		</>
	);
}
export default ProductId;
