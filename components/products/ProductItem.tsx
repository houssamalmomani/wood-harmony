import Image from 'next/image';
import Card from '../ui/Card';
import { useRouter } from 'next/router';
import { typeDetails } from './ProductList';
import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import BtnMin from '../ui/BtnMin';
import BtnItem from '../ui/BtnItem';
import { useTranslation } from 'next-i18next';

const ProductItem: React.FC<typeDetails> = (props) => {
	const { locale } = useRouter();
	const { t } = useTranslation('common');
	const [isLoading, setIsLoading] = useState(false);
	const cartCtx = useContext(CartContext);
	const addItemToCartHandler = (amount: number) => {
		cartCtx.addItem({
			id: props.id,
			title: props.title,
			amount: amount,
			price: props.price,
			image: props.image,
		});
	};
	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(props.id);
	};
	const { items } = cartCtx;

	let amount = items?.find((item: any) => item.id === props.id)
		? props.amount
		: 0;

	const router = useRouter();
	const ProductsDetailsHandler = () => {
		setIsLoading(true);

		router.push('/' + props.id);
	};
	return (
		<Card>
			<li className="max-sm:rounded-lg   ">
				<div
					className="max-sm:rounded-lg group relative"
					onClick={ProductsDetailsHandler}
				>
					<div className="overflow-hidden drop-shadow-lg max-sm:rounded-lg">
						<Image
							src={props.image[0]}
							alt={props.title}
							className="max-sm:rounded-lg group-hover:scale-150 duration-200 "
							priority
							width={500}
							height={500}
							quality={30}
						/>
					</div>
					{isLoading && (
						<div
							className="absolute top-0 bottom-0 right-0 left-0
						bg-gradient-to-b from-gray-50 to-white
						opacity-70 rounded-lg md:rounded-none
						animate-pulse text-center py-[45%]"
						>
							<h1 className="uppercase font-Orbitron text-black">
								{t('loading ....')}
							</h1>
						</div>
					)}
				</div>
				<div
					className={`p-4 flex flex-row items-end justify-between 
					${locale === 'ar' && ' flex-row-reverse justify-start'}`}
				>
					<div className={` ${locale === 'ar' && 'flex flex-col items-end'}`}>
						<h3 className=" font-Josefin font-bold">{t(props.title)}</h3>
						<p className=" font-Josefin">{t(props.description)}</p>

						<p className="font-bold"> {`JOD ${props.price.toFixed(2)}`}</p>
					</div>
					{amount === 0 ? (
						<BtnItem onAdd={addItemToCartHandler.bind(0, props.amount)} />
					) : (
						<BtnMin onAdd={cartItemRemoveHandler.bind(null, props.id)} />
					)}
				</div>
			</li>
		</Card>
	);
};
export default ProductItem;
