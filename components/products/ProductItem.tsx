import Image from 'next/image';
import Card from '../ui/Card';
import { itemsProps } from './ProductList';
import Link from 'next/link';

const ProductItem: React.FC<itemsProps> = (props) => {
	return (
		<Card>
			<Link
				className="max-sm:rounded-lg relative group  "
				href={''}
			>
				<li className="max-sm:rounded-lg hover:text-gray-500  ">
					<div className="overflow-hidden">
						<Image
							src={props.image}
							alt={props.title}
							className="max-sm:rounded-t-lg group-hover:scale-150 duration-200 "
							priority
						/>
					</div>
					<div className="p-4 ">
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
