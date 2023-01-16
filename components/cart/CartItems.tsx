import Image from 'next/image';
import { typeDetails } from '../products/ProductList';
import BtnClose from '../ui/BtnClose';

const CartItem: React.FC<typeDetails | any> = (props) => {
	const price = `JOD ${props.price.toFixed(2)}`;

	return (
		<>
			<li>
				<div className="flex flex-row items-center  justify-between">
					<h4 className=" capitalize font-Josefin">{props.title}</h4>
					<BtnClose close={props.onRemove} />
				</div>
				<div className="flex flex-row justify-between items-end border-b-[1px] pb-2 ">
					<Image
						className="rounded-full "
						src={props.image}
						alt="cart image"
						width={80}
						height={80}
					/>
					<span className="font-Alata text-sm">{price}</span>
				</div>
			</li>
		</>
	);
};

export default CartItem;
