import { useContext } from 'react';
import Btn from '../ui/Btn';
import CartContext from '../store/cart-context';

const CartForm: React.FC = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `JOD ${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;
	const cartItems: any = (
		<ul className=" list-none m-0 p-0 max-h-80 overflow-auto">
			{cartCtx.items.map((item) => (
				<li key={item.id}>{item.title}</li>
			))}
		</ul>
	);
	return (
		<div
			className="fixed top-[20vh] left-[5%] w-11/12 p-4 bg-white text-black
		 				rounded-md drop-shadow-lg z-30 slide-down"
		>
			{cartItems}
			<div className=" flex justify-between items-center font-bold text-2xl my-4">
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>

			<div className=" text-right">
				{hasItems && (
					<button
						className="px-10 py-2 my-0 font-bold tracking-widest  
				border-2 border-black  font-alata hover:bg-black
				hover:text-white  uppercase rounded-full"
					>
						{' '}
						Check out
					</button>
				)}
			</div>
		</div>
	);
};

export default CartForm;
