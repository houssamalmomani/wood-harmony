import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import Btn from '../ui/Btn';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Image, { StaticImageData } from 'next/image';

const ProductDetails: React.FC<any> = (props) => {
	const cartCtx = useContext(CartContext);

	return (
		<div className="w-auto my-32">
			<div
				className="flex flex-col gap-10 items-center 
				justify-center mb-10 mt-32 max-w-xl mx-auto "
			>
				<h1 className=" font-Orbitron md:text-3xl text-xl">
					{props.items.title}
				</h1>
				<div className=" w-full p-5">
					<div className="">
						<Swiper
							pagination={true}
							spaceBetween={10}
							modules={[Pagination]}
						>
							{props.items.image.map((item: any, index: any) => (
								<>
									<SwiperSlide
										key={index}
										className="rounded-lg "
									>
										<Image
											src={item}
											alt="product images"
											className=" rounded-lg "
											width={500}
											height={500}
										/>
									</SwiperSlide>
								</>
							))}
						</Swiper>
					</div>
				</div>

				<Btn
					onAdd={cartCtx.addItem}
					title={'Add To Cart'}
				></Btn>
			</div>
		</div>
	);
};
export default ProductDetails;
