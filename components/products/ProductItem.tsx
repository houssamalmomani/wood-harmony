import Image, { StaticImageData } from 'next/image';
import Card from '../ui/Card';
import { useRouter } from 'next/router';

const ProductItem: React.FC<{
	id: string;
	image: StaticImageData[];
	title: string;
	description: string;
	category: string;
	price: string;
}> = (props) => {
	const router = useRouter();
	const ProductsDetailsHandler = () => {
		router.push('/' + props.id);
	};
	return (
		<Card>
			<div
				className="max-sm:rounded-lg relative group"
				role="button"
				onClick={ProductsDetailsHandler}
			>
				<li className="max-sm:rounded-lg hover:text-gray-500  ">
					<div className="overflow-hidden">
						<Image
							src={props.image[0]}
							alt={props.title}
							className="max-sm:rounded-t-lg group-hover:scale-150 duration-200 "
							priority
							width={500}
							height={500}
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
			</div>
		</Card>
	);
};
export default ProductItem;
