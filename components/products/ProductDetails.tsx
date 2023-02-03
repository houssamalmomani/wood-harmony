import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper';
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
	const { t } = useTranslation('common');
	const weight = `${props.item.weight.toFixed(1)} ${t('g')}`;
	const cartCtx = useContext(CartContext);
	const cartItemAddHandler = (item: any, id: any) => {
		cartCtx.addItem({ ...item, amount: 1, id: props.id });
	};
	const cartItemRemoveHandler = (id: string) => {
		cartCtx.removeItem(id);
	};

	const { items } = cartCtx;
	let amount = items?.find((item: any) => item.id === props.id)
		? props.amount
		: 0;
	return (
		<div className="w-full px-1 ">
			<div
				className="flex flex-col  
				mt-20 md:mt-32 max-w-2xl mx-auto "
			>
				<h1 className=" font-Josefin md:text-3xl text-2xl text-center overflow-hidden">
					{props.item.title}
				</h1>
				<div className=" w-full my-5">
					<Swiper
						style={{
							/* @ts-ignore */
							'--swiper-pagination-bullet-inactive-color': 'white',
							'--swiper-pagination-bullet-inactive-opacity': '1',
							'--swiper-pagination-bullet-size': '6px',
							'--swiper-pagination-color': '#00ed00',
							'--swiper-pagination-bullet-horizontal-gap': '5px',
						}}
						className="  "
						effect={'coverflow'}
						grabCursor={true}
						pagination={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						modules={[EffectCoverflow, Pagination]}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: false,
						}}
					>
						{props.item.image.map((images: string, index: number) => (
							<SwiperSlide key={index}>
								<Image
									src={images}
									alt="product images"
									className="  "
									width={700}
									height={700}
									priority
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div
					className={`flex flex-col gap-4 px-2 font-Josefin capitalize mb-5 md:text-xl
					${locale === 'ar' && 'items-end'}`}
				>
					<h2 className="flex flex-row">{`${t('description')}: 
					${t(props.item.description)}`}</h2>
					<h2>{`	${t('dimensions')}: ${t(props.item.dimensions)}`}</h2>
					<h2>{`${t('weight')}: ${t(weight)}`}</h2>
					<h2>{`${t('price')}: ${t(props.item.price)} JOD`}</h2>
				</div>
				<div className="text-center">
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
		</div>
	);
};
export default ProductDetails;
