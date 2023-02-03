import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItems';
import { typeDetails } from '../products/ProductList';
import CheckoutForm from './CheckoutForm';
import Btn from '../ui/Btn';
import LoadingSpin from '../ui/LoadingSpin';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';

const CartForm: React.FC = () => {
	const { t } = useTranslation('common');
	const { locale } = useRouter();

	const [checkout, setCheckout] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [submit, setSubmit] = useState(false);

	const cartCtx = useContext(CartContext);

	const totalAmount = `JOD ${cartCtx.totalAmount?.toFixed(2)}`;

	const hasItems = cartCtx.items?.length > 0;

	const cartItemAddHandler = (item: typeDetails) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};

	const cartSendHandler = () => {
		setSubmit(false);
		cartCtx.clearCart();
	};

	const submitHandler = async (userData: any) => {
		try {
			setIsLoading(true);
			setError(null);

			const res = await fetch('/api/orders', {
				method: 'POST',
				body: JSON.stringify({
					userData,
					orderItems: cartCtx.items,
				}),
			});
			if (!res.ok) {
				throw new Error('Sorry! Something went wrong please try again!');
			}
		} catch (error) {}
		setSubmit(true);
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
		<>
			{submit ? (
				<div
					className="slide-down space-y-8 capitalize my-52 py-10 px-4 
											max-w-2xl mx-auto text-center rounded-xl "
				>
					{error ? (
						<>
							<p>{t('Sorry, Something went wrong please try again!')} </p>
							<Btn
								title={t('close')}
								onAdd={() => setSubmit((prevState) => !prevState)}
							/>
						</>
					) : (
						<>
							<p>
								{t(
									'thank you for choosing our product we will contact you as soon as possible'
								)}
							</p>
							<Btn
								title={t('close')}
								onAdd={cartSendHandler}
							/>
						</>
					)}
				</div>
			) : (
				<div
					className=" mx-2 sm:mx-auto mt-16 p-4 md:mt-32 bg-white 
										text-black dark:text-white dark:bg-slate-800 
										rounded-xl drop-shadow-lg z-30 slide-down max-w-2xl "
				>
					{cartItems}

					<div
						className={`flex flex-row  my-4  justify-between gap-5 ${
							locale === 'ar' && 'flex-row-reverse'
						}`}
					>
						{!hasItems ? (
							<p className=" capitalize"> {t('cart is empty')}</p>
						) : (
							<>
								{!checkout && (
									<Btn
										title={t('check out')}
										onAdd={() => setCheckout(!checkout)}
									/>
								)}
								<div className={`flex${checkout ? 'flex-row ' : 'flex-col'}`}>
									<div className=" font-Josefin capitalize text-sm">
										{t('total amount')}
									</div>
									<div className="font-Alata text-sm  text-[#00ed00]">
										{totalAmount}
									</div>
								</div>
							</>
						)}
					</div>

					{hasItems && checkout && !isLoading && (
						<CheckoutForm
							cancel={() => setCheckout((prevState) => !prevState)}
							onConfirm={submitHandler}
						/>
					)}
					{isLoading && (
						<div className="text-center">
							<LoadingSpin />
						</div>
					)}
				</div>
			)}
			{!error && submit && <Confetti recycle={false} />}
		</>
	);
};

export default CartForm;
