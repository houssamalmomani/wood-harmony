import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Pagination, EffectCards } from 'swiper';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay } from 'swiper';

const ProductImagesSlider: React.FC<any> = (props) => {
	return (
		<div className="">
			<Swiper
				pagination={props.pagination}
				autoplay={props.autoplay}
				effect={'cards'}
				modules={[EffectCards, Autoplay, Pagination]}
				grabCursor={true}
				className=" rounded-lg mx-auto"
			>
				{props.images.map((item: string, index: number) => (
					// eslint-disable-next-line react/jsx-key
					<SwiperSlide className="rounded-lg ">
						<Image
							key={props.id}
							src={item}
							alt="product images"
							className=" rounded-lg"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
export default ProductImagesSlider;
