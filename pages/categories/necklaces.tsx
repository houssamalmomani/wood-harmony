import Category from '../../components/categories/Category';
import { DUMMY_DATA } from '../all-products';
import FixedNav from '../../components/ui/FixedNav';

export default function necklaces() {
	return (
		<>
			<div className="md:my-64 max-w-7xl mx-auto ">
				<Category
					items={DUMMY_DATA}
					category={'neck-laces'}
				/>
			</div>
			<FixedNav />
		</>
	);
}
