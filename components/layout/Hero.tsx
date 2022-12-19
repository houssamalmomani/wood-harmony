import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import bg from '../../public/assets/desktop/img3R.jpg';
import Layout from './Layout';
// export interface ProviderProps {
// 	children?: React.ReactNode | undefined;
// }

const Hero: React.FC = () => {
	return (
		<header className=" relative flex overflow-hidden shadow-2xl ">
			<Image
				className="object-cover "
				src={bg}
				fill
				alt="main pic"
				priority
			/>
			<div className=" absolute bg-black opacity-40 bottom-0 top-0 w-full"></div>
			<div className="z-10 container max-w-6xl mx-auto px-6 py-12">
				<NavBar />
				<div className="header-text opacity-60 "> purely handmade</div>
			</div>
		</header>
	);
};
export default Hero;
