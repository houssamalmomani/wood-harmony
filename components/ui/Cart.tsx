import Image from 'next/image';

const Cart: React.FC = () => {
	return (
		<div className=" ">
			<div className="  font-extrabold rounded-full w-5 text-black relative">
				<div className=" absolute top-2.5 left-2 font-Orbitron svg text-xs">
					65
				</div>
			</div>
			<div className="  top-5">
				<Image
					src="/cart2.png"
					alt=""
					width={40}
					height={40}
				/>
			</div>
		</div>
	);
};
export default Cart;
