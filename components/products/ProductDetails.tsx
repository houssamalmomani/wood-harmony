import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination } from 'swiper';
import Btn from '../ui/Btn';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

type ProductDetailsProps = {
	item: {
		id: string;
		image: string[];
		title: string;
		category: string;
		description: string;
		price: number;
	};
};

const ProductDetails: React.FC<ProductDetailsProps | any> = (props) => {
	const { locale } = useRouter();
	const { t } = useTranslation('productDetails');
	const weight = `${props.item.weight.toFixed(1)} ${t('g')}`;
	const cartCtx = useContext(CartContext);
	const cartItemAddHandler = (item: any, id: any) => {
		cartCtx.addItem({ ...item, amount: 1, id: props.id });
	};
	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};

	const { items } = cartCtx;
	const amount: number =
		items.find((item: any) => item.id === props.id)?.amount || 0;

	return (
		<div className="w-auto ">
			<div
				className="flex flex-col  
				 						mt-20 md:mt-32 max-w-xl mx-auto "
			>
				<h1 className=" font-Josefin md:text-3xl text-2xl text-center">
					{props.item.title}
				</h1>
				<div className=" w-full p-5">
					<Swiper
						style={{
							'--swiper-pagination-bullet-inactive-color': '#999999',
							'--swiper-pagination-bullet-inactive-opacity': '1',
							'--swiper-pagination-bullet-size': '10px',
							'--swiper-pagination-bullet-horizontal-gap': '6px',
						}}
						className=" max-[450px]:h-[27rem] max-[350px]:h-[20rem] "
						effect={'flip'}
						grabCursor={true}
						pagination={true}
						modules={[EffectFlip, Pagination]}
					>
						{props.item.image.map((images: string, index: number) => (
							<SwiperSlide
								key={index}
								className="rounded-lg "
							>
								<Image
									src={images}
									alt="product images"
									className=" rounded-lg "
									width={700}
									height={700}
									quality={70}
									priority
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div
					className={`flex flex-col gap-4 px-5 font-Josefin capitalize mb-10 ${
						locale === 'ar' && 'items-end'
					}`}
				>
					<h2 className="flex flex-row-reverse">{`${t('description')}: ${t(
						props.item.description
					)}`}</h2>
					<h2>{`	${t('dimensions')}: ${t(props.item.dimensions)}`}</h2>
					<h2>{`${t('weight')}: ${t(weight)}`}</h2>
				</div>
				{amount === 0 ? (
					<Btn
						title={t('Add To Cart')}
						onAdd={cartItemAddHandler.bind(null, props.item, props.id)}
					/>
				) : (
					<Btn
						title={t('Remove')}
						onAdd={cartItemRemoveHandler.bind(null, props.id)}
					/>
				)}
			</div>
		</div>
	);
};
export default ProductDetails;
