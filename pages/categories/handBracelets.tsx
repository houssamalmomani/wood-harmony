import { MongoClient } from 'mongodb';
import FixedNav from '../../components/ui/FixedNav';
import ProductsList from '../../components/products/ProductList';
export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://Houssam:@cluster0.qat5w5x.mongodb.net/items?retryWrites=true&w=majority'
	);
	const db = client.db();

	const itemsCollection = db.collection('items');

	const items = await itemsCollection.find().toArray();
	client.close();
	return {
		props: {
			items: items
				.filter((item) => {
					return item.category === 'hand-bracelets';
				})
				.map((item) => ({
					id: item._id.toString(),
					title: item.title,
					image: item.image,
					category: item.category,
					description: item.description,
					price: item.price,
				})),
		},
		// revalidate: 5,
	};
}
export default function handBracelets(props: any) {
	return (
		<>
			<div className="md:my-64 max-w-7xl mx-auto">
				<ProductsList items={props.items} />
			</div>
			<FixedNav />
		</>
	);
}
