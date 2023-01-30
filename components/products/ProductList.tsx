import ProductItem from './ProductItem';
import { typeItems } from '../../pages/all-products';
import { useTranslation } from 'next-i18next';
export type typeDetails = {
	category: string;
	title: string;
	image: string[];
	description: string;
	price: number;
	id: string;
};
const ProductsList: React.FC<typeItems> = (props) => {
	const { t } = useTranslation('allPro');
	return (
		<div className="max-w-7xl mx-auto">
			<h1 className="text-center mt-32 md:mt-44 md:mb-24 mb-12 font-Josefin capitalize md:text-2xl text-xl">
				{t('every item is a unique item so you can only choose one item')}
			</h1>
			<ul
				className="	 grid grid-col-1 
				xl:grid-cols-4 xl:gap-10  xl:mx-0
				lg:grid-cols-3 -lg:gap-5
				md:gap-5 md:grid-cols-2 md:mx-20
				max-sm:grid-cols-2 max-sm:mx-1 max-sm:gap-1
				sm:grid-cols-2 sm:gap-1 sm:mx-12
				max-[320px]:grid-cols-1 
				"
			>
				{props.items.map((item: typeDetails) => (
					<ProductItem
						key={item.id}
						{...item}
						locale={props.locale}
					/>
				))}
			</ul>
		</div>
	);
};
export default ProductsList;
