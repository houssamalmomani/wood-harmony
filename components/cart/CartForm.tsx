import Btn from '../ui/Btn';

const CartForm: React.FC = (props) => {
	const cartItems: any = (
		<ul className=" list-none m-0 p-0 max-h-80 overflow-auto">
			{[
				{
					id: '1',
					title: 'hand',
					amount: 2,
					price: 14,
					image: 'hand',
					description: 'this is a test unit ',
				},
			].map((item) => (
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
				<span>JOD 35.6</span>
			</div>

			<div className=" text-right">
				<button
					className="px-10 py-2 my-0 font-bold tracking-widest  
                		    	border-2 border-black  font-alata hover:bg-black
                    			hover:text-white  uppercase rounded-full"
				>
					{' '}
					Check out
				</button>
			</div>
		</div>
	);
};

export default CartForm;
