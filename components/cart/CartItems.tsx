import Image from 'next/image';
import { typeDetails } from '../products/ProductList';
import Btn from '../ui/Btn';

const CartItem: React.FC<typeDetails | any> = (props) => {
	const price = `JOD ${props.price.toFixed(2)}`;

	return (
		<>
			<li className="flex flex-col justify-between max-w-6xl mx-auto mt-5">
				<div className="flex flex-row mb-3 items-center space-y-3 justify-between">
					<h4 className=" capitalize font-Josefin">{props.title}</h4>
					<span className="font-Alata text-sm">{price}</span>
				</div>
				<div className="flex flex-row justify-between mb-3 items-end ">
					<Image
						className="rounded-full"
						src={props.image}
						alt="ase"
						width={100}
						height={100}
					/>
					<Btn
						onAdd={props.onRemove}
						title={'remove'}
					/>
				</div>
			</li>
			<hr className="max-w-6xl mx-auto" />
		</>
	);
};

export default CartItem;
