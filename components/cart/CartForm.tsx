import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItems';
import { typeDetails } from '../products/ProductList';

const CartForm: React.FC = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `JOD ${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item: typeDetails) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};
	const cartItems: any = (
		<ul className=" list-none m-0 p-0 max-h-80 overflow-auto ">
			{cartCtx.items.map((item: typeDetails | any) => (
				<CartItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					price={item.price}
					image={item.image[0]}
					onAdd={cartItemAddHandler.bind(null, item)}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);
	return (
		<div
			className="fixed top-[20vh] left-[5%]  w-11/12 p-4 bg-white 
						text-black dark:text-white dark:bg-slate-800 
		 				rounded-md drop-shadow-lg z-30 slide-down "
		>
			{cartItems}
			<div className=" flex justify-between items-center my-4 max-w-6xl mx-auto">
				{hasItems && (
					<button
						className=" px-8 py-2 tracking-widest border-2 border-black
						dark:border-white font-alata hover:bg-black
                    	dark:hover:bg-white hover:text-white
					  	 dark:hover:text-black uppercase rounded-full"
					>
						{' '}
						Check out
					</button>
				)}
				<div className="flex flex-col">
					<span className=" font-Josefin capitalize text-sm">Total amount</span>
					<span className="font-Alata text-sm">{totalAmount}</span>
				</div>
			</div>
		</div>
	);
};

export default CartForm;
