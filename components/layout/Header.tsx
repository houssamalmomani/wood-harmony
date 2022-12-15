import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import bg from '../../public/wide.jpg';
import Layout from './Layout';
// export interface ProviderProps {
// 	children?: React.ReactNode | undefined;
// }

const Header: React.FC = () => {
	return (
		<header
			id='hero'
			className=' bg-black bg-fixed bg-cover h-screen bg-center'
			style={{
				backgroundImage: `url(${bg.src})`,
				// width: '100%',
				// height: '100%',
			}}
		>
			<div className='z-10 container max-w-6xl mx-auto px-6 py-12'>
				<NavBar />
				<div className='header-text opacity-60 shrink-0'> purely handmade</div>
			</div>
			{/* <Image
				className=' absolute  '
				src={bg}
				alt=''
				priority
			/> */}
		</header>
	);
};
export default Header;
