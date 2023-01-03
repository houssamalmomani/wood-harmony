import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Image from 'next/image';
import { useState } from 'react';
import CartForm from '../cart/CartForm';

const Cart: React.FC = () => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const [overlays, setOverlays] = useState<boolean>(false);

	return (
		<>
			<button
				className=" z-30 font-extrabold rounded-full w-10 text-black relative"
				onClick={() => setOverlays(!overlays)}
			>
				<div>
					<Image
						src="/cart2.png"
						alt=""
						width={100}
						height={100}
						className={`${overlays ? ' animate-pulse ' : ' '}`}
					/>
					<div className=" absolute top-2 left-3 font-Orbitron svg text-xs">
						{numberOfCartItems}
					</div>
				</div>
			</button>
			<div
				className={` z-20 fixed  top-0 bottom-0 
			left-0 w-full min-h-screen py-1 pt-20 pl-12 slide-down
			text-lg text-white uppercase bg-black bg-opacity-80
			${overlays ? ' fixed' : 'hidden'}`}
			>
				<CartForm />
			</div>
		</>
	);
};
export default Cart;
