import React from 'react';
import NavBar from '../ui/NavBar';
import Image from 'next/image';

import bg from '../../public/assets/desktop/img3D.jpg';
import bgM from '../../public/assets/desktop/img3.jpg';
import Layout from './Layout';
// export interface ProviderProps {
// 	children?: React.ReactNode | undefined;
// }

const Hero: React.FC = () => {
	return (
		<header className="relative flex overflow-hidden shadow-xl ">
			<Image
				className="hidden object-cover w-full md:block "
				src={bg}
				fill
				alt="main pic"
				priority
			/>
			<Image
				className="object-cover w-full md:hidden"
				src={bgM}
				fill
				alt="main pic"
				priority
			/>

			<div className=" absolute bg-black opacity-40 dark:opacity-60 bottom-0 top-0 w-full" />
			<div className="z-10 container max-w-6xl mx-auto  px-3 xl:px-0 py-8">
				<NavBar />
				<div className="header-text opacity-60 "> purely handmade</div>
			</div>
		</header>
	);
};
export default Hero;
