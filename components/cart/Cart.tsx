import { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import CartForm from '../cart/CartForm';
import CartContext from '../store/cart-context';
import BtnClose from '../ui/BtnClose';

const Cart: React.FC = () => {
	const [btnBump, setBtnBump] = useState(false);

	const [overlays, setOverlays] = useState<boolean>(false);

	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const numberOfCartItems = items?.reduce((curNumber: number, item: any) => {
		return curNumber + item.amount;
	}, 0);

	const btnClass = btnBump ? 'bump' : '';
	useEffect(() => {
		if (items?.length > 0) setBtnBump(true);

		const timer = setTimeout(() => {
			setBtnBump(false);
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<>
			{!overlays ? (
				<button
					className={` font-extrabold rounded-full w-10 text-black  relative 
										${btnClass}`}
					onClick={() => setOverlays((prevState) => !prevState)}
				>
					<div>
						<Image
							src="/cart2.png"
							alt=""
							width={100}
							height={100}
							className={`${numberOfCartItems > 0 && ' animate-pulse'}`}
						/>
						<div className=" absolute top-2 left-3 font-Orbitron svg text-xs">
							{numberOfCartItems}
						</div>
					</div>
				</button>
			) : (
				<BtnClose close={() => setOverlays((prevState) => !prevState)} />
			)}
			<div
				className={`fixed  top-0 bottom-0  
										left-0 w-full min-h-screen slide-down
							 		bg-black bg-opacity-70
									${overlays ? ' fixed z-20' : 'hidden'}`}
			>
				<CartForm />
			</div>
		</>
	);
};
export default Cart;
