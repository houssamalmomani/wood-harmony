import Category from '../../components/categories/Category';
import FixedNav from '../../components/ui/FixedNav';
import { DUMMY_DATA } from '../all-products';

export default function handBracelets() {
	return (
		<>
			<div className="md:my-64 max-w-7xl mx-auto">
				<Category
					items={DUMMY_DATA}
					category={'hand-bracelets'}
				/>
			</div>
			<FixedNav />
		</>
	);
}
