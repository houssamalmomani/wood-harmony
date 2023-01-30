import React from 'react';
import Image from 'next/image';
import bg from '../../public/img3.jpg';
import { useTranslation } from 'next-i18next';

const Hero: React.FC = (props) => {
	const { t } = useTranslation('home');
	return (
		<header className="drop-shadow-lg relative ">
			<Image
				className=" object-cover  "
				src={bg}
				fill
				alt="main pic"
				quality={50}
				priority
				placeholder="blur"
			/>

			<div
				className=" absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b 
							from-transparent to-black opacity-70 dark:opacity-100 "
			/>
			<div
				className={`z-10 container max-w-7xl mx-auto  px-3 xl:px-0 py-28 ${
					props.locale === 'ar' && ' flex flex-row justify-end'
				} `}
			>
				<div className="header-text opacity-70 uppercase move-in-left  duration-300">
					{t('Purely Handmade')}
				</div>
			</div>
		</header>
	);
};
export default Hero;
