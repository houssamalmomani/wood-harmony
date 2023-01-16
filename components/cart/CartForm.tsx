import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItems';
import { typeDetails } from '../products/ProductList';
import CheckoutForm from './CheckoutForm';
import Btn from '../ui/Btn';

const CartForm: React.FC = () => {
	const [checkout, setCheckout] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const cartCtx = useContext(CartContext);

	const totalAmount = `JOD ${cartCtx.totalAmount?.toFixed(2)}`;

	const hasItems = cartCtx.items?.length > 0;

	const cartItemAddHandler = (item: typeDetails) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};
	const submitHandler = async (userData: any) => {
		try {
			setIsLoading(true);
			setError(null);
			const res = await fetch(
				'https://wood-harmony-9b998-default-rtdb.firebaseio.com/orders.json',
				{
					method: 'POST',
					body: JSON.stringify({
						user: userData,
						orderItems: cartCtx.items,
					}),
				}
			);
			if (!res.ok) {
				throw new Error('Sorry! Something went wrong please try again!');
			}
			console.log(res, 'the res message');
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	};

	const cartItems: any = (
		<ul className=" list-none  max-h-60 sm:max-h-96 overflow-auto  ">
			{cartCtx.items?.map((item: typeDetails | any) => (
				<CartItem
					key={item.id}
					title={item.title}
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
			className=" mx-2 sm:mx-auto mt-16 p-4 md:mt-32 bg-white 
		text-black dark:text-white dark:bg-slate-800 
		rounded-xl drop-shadow-lg z-30 slide-down max-w-2xl "
		>
			{cartItems}
			<div className=" flex flex-row  my-4  justify-between  ">
				{hasItems && (
					<>
						{!checkout && (
							<Btn
								title="check out"
								onAdd={() => setCheckout(!checkout)}
							/>
						)}
					</>
				)}
				{!isLoading && error && (
					<p className="text-red-400 max-sm:text-xs">
						Sorry! Something went wrong please try again!
					</p>
				)}
				{/* {!isLoading && !error && (
					<p>
						cart has been sent thank you for choosing our product we will
						contact you as soon as possible
					</p>
				)} */}
				{hasItems ? (
					<div
						className={`flex     ${
							!error && checkout ? 'flex-row ' : 'flex-col  '
						}`}
					>
						<div className=" font-Josefin capitalize text-sm">Total amount</div>
						<div className="font-Alata text-sm  text-[#00ed00]">
							{totalAmount}
						</div>
					</div>
				) : (
					<p> cart is empty</p>
				)}
			</div>
			{isLoading && (
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
			{hasItems && checkout && !isLoading && (
				<CheckoutForm
					cancel={() => setCheckout(!checkout)}
					onConfirm={submitHandler}
				/>
			)}
		</div>
	);
};

export default CartForm;

// useEffect(() => {
// 	// Perform localStorage action
// 	const items = localStorage.getItem('items');
// }, [cartCtx.items]);
// const f = () => {
// 	if (typeof window !== 'undefined') {
// 		// Perform localStorage action
// 		const items = localStorage.getItem('items');
// 		const i = items ? JSON.parse(items) : [];
// 		return i;
// 	}
// };
// useEffect(() => {
// 	localStorage.setItem('items', JSON.stringify(cartCtx.items));
// }, [cartCtx.addItem]);
