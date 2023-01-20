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
	const weight = `${props.item.weight.toFixed(1)}g`;
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
						spaceBetween={10}
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
									width={500}
									height={500}
									priority
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="flex flex-col gap-2 px-5 font-Josefin capitalize">
					<h2>
						description:
						{props.item.description}
					</h2>
					<h2>dimensions: {props.item.dimensions}</h2>
					<h2>weight: {weight} </h2>
					{amount === 0 ? (
						<Btn
							title="Add To Cart"
							onAdd={cartItemAddHandler.bind(null, props.item, props.id)}
						/>
					) : (
						<Btn
							title="Remove"
							onAdd={cartItemRemoveHandler.bind(null, props.id)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
export default ProductDetails;
