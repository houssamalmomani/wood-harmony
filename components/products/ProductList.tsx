import React from 'react';
import { StaticImageData } from 'next/image';
import ProductItem from './ProductItem';

export type itemsProps = {
	[x: string]: string | StaticImport;
	items: {
		id: string;
		image: StaticImageData;
		title: string;
		category: string;
		description: string;
		price: string;
	}[];
};

const ProductsList: React.FC<itemsProps> = (props) => {
	return (
		<ul
			className="	my-32 grid grid-col-1 
             			xl:grid-cols-4 xl:gap-10  xl:mx-0
             			lg:grid-cols-3 -lg:gap-5
            			md:gap-5 md:grid-cols-2 md:mx-20
            			max-sm:grid-cols-2 max-sm:mx-1 max-sm:gap-1
            			sm:grid-cols-2 sm:gap-1 sm:mx-12
						max-[320px]:grid-cols-1 
            "
		>
			{props.items.map((item) => (
				<ProductItem
					key={item.id}
					id={item.id}
					image={item.image}
					title={item.title}
					description={item.description}
					category={item.category}
					price={item.price}
					items={[]}
				/>
			))}
		</ul>
	);
};
export default ProductsList;
