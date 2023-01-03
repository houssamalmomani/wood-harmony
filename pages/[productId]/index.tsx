import ProductDetails from '../../components/products/ProductDetails';
import hand from '../../public/handb2.jpg';
import neck from '../../public/neck1.jpg';
import key from '../../public/keyD1.jpg';
import { StaticImageData } from 'next/image';

function ProductId(props: { items: { image: StaticImageData[] } }) {
	return (
		<>
			<ProductDetails images={props.items.image} />
		</>
	);
}
export async function getStaticPaths() {
	return {
		fallback: true,
		paths: [
			{
				params: {
					productId: '0',
				},
			},
			{
				params: {
					productId: '1',
				},
			},
		],
	};
}
export async function getStaticProps(context: any) {
	const productId: number | string = context.params.productId;

	return {
		props: {
			items: {
				image: [hand, neck, key],
				id: productId,
				title: 'hand',
				price: '14.00',
				description: 'lorem test',
			},
		},
	};
}

export default ProductId;
