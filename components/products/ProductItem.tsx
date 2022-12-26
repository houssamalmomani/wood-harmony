import Image, { StaticImageData } from 'next/image';

import Card from '../ui/Card';

import { itemsProps } from './ProductList';
import Link from 'next/link';

const ProductItem: React.FC<itemsProps> = (props) => {
	return (
		<Card>
			<Link
				className="max-sm:rounded-xl"
				href={''}
			>
				<li className="max-sm:rounded-xl ">
					<div className=" ">
						<Image
							src={props.image}
							alt={props.title}
							className="max-sm:rounded-t-lg"
						/>
					</div>
					<div className="p-5 ">
						<h3 className=" font-Josefin font-bold">{props.title}</h3>
						<p className=" font-Josefin">{props.description}</p>
						<p className="font-bold">
							JOD {''}
							{props.price}
						</p>
					</div>
				</li>
			</Link>
		</Card>
	);
};
export default ProductItem;
