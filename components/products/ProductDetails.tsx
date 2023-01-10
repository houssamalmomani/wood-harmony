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
	const cartCtx = useContext(CartContext);
	const cartItemAddHandler = (item: any, id: any) => {
		cartCtx.addItem({ ...item, amount: 1, id: props.id });
	};
	return (
		<div className="w-auto ">
			<div
				className="flex flex-col gap-10 items-center 
				justify-center mb-10 mt-20 md:mt-32 max-w-xl mx-auto "
			>
				<h1 className=" font-Orbitron md:text-3xl text-xl">
					{props.item.title}
				</h1>
				<div className=" w-full p-5">
					<div className="">
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
					<h2 className=" font-bold text-center">{props.item.description}</h2>
				</div>

				<Btn
					title="Add To Cart"
					onAdd={cartItemAddHandler.bind(null, props.item, props.item.id)}
				/>
			</div>
		</div>
	);
};
export default ProductDetails;
