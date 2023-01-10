import Image from 'next/image';
import Card from '../ui/Card';
import { useRouter } from 'next/router';
import { typeDetails } from './ProductList';
import BtnCart from '../ui/BtnCart';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import BtnMin from '../ui/BtnMin';

const ProductItem: React.FC<typeDetails> = (props) => {
	const cartCtx = useContext(CartContext);

	const addItemToCartHandler = (amount: number) => {
		cartCtx.addItem({
			id: props.id,
			title: props.title,
			amount: amount,
			price: props.price,
			image: props.image,
		});
	};
	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};

	const router = useRouter();
	const ProductsDetailsHandler = () => {
		router.push('/' + props.id);
	};
	return (
		<Card>
			<li className="max-sm:rounded-lg   ">
				<div
					className="max-sm:rounded-lg group relative"
					onClick={ProductsDetailsHandler}
				>
					<div className="overflow-hidden drop-shadow-lg">
						<Image
							src={props.image[0]}
							alt={props.title}
							className="max-sm:rounded-t-lg group-hover:scale-150 duration-200 "
							priority
							width={500}
							height={500}
						/>
					</div>
					<div
						className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b 
		                from-transparent  group-hover:from-gray-50 group-hover:to-white 
						group-hover:opacity-70 rounded-lg md:rounded-none group-hover:animate-pulse text-center py-[45%]"
					>
						<h1 className=" hidden max-md:group-hover:block uppercase font-Orbitron text-black">
							loading ....
						</h1>
					</div>
				</div>
				<div className="p-4 flex flex-row items-end justify-between">
					<div>
						<h3 className=" font-Josefin font-bold">{props.title}</h3>
						<p className=" font-Josefin">{props.description}</p>
						<p className="font-bold"> {`JOD ${props.price.toFixed(2)}`}</p>
					</div>

					<BtnCart onAdd={addItemToCartHandler.bind(null, 1)} />
					<BtnMin onAdd={cartItemRemoveHandler.bind(null, props.id)} />
				</div>
			</li>
		</Card>
	);
};
export default ProductItem;
