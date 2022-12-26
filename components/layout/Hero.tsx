import React from 'react';
import NavBar from '../ui/NavBar';
import Image from 'next/image';
import bg from '../../public/FB_IMG_1671806012184.jpg';

const Hero: React.FC = () => {
	return (
		<header className="relative flex overflow-hidden shadow-xl ">
			<Image
				className=" object-cover block "
				src={bg}
				fill
				alt="main pic"
				priority
			/>
			<div className=" absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-black opacity-70 dark:opacity-100 " />
			<div className="z-10 container max-w-7xl mx-auto  px-3 xl:px-0 py-8">
				<NavBar />
				<div className="header-text opacity-50 uppercase move-in-left  duration-300">
					{' '}
					Purely Handmade
				</div>
			</div>
		</header>
	);
};
export default Hero;
