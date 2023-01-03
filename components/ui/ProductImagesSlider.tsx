import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Pagination, EffectCards, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css/pagination';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const ProductImagesSlider: React.FC<
	{ items: { images: StaticImageData[] } } | any
> = (props) => {
	return (
		<div className="">
			<Swiper
				pagination={true}
				spaceBetween={10}
				modules={[Pagination]}
			>
				{props.images.map((item: any, index: any) => (
					<SwiperSlide
						key={index}
						className="rounded-lg "
					>
						<Image
							src={item}
							alt="product images"
							className=" rounded-lg "
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
export default ProductImagesSlider;
