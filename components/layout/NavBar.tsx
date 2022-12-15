import Link from 'next/link';
import React, { useState } from 'react';

export default function NavBar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [itemOpen, setItemOpen] = useState(false);

	const handleToggle = (event: React.MouseEvent) => {
		setNavbarOpen(true);
		setItemOpen(true);
	};
	return (
		<>
			<nav className='flex items-center justify-between font-bold text-white'>
				<h1 className="font-['Orbitron',sans-serif] text-xl ">Wood Harmony</h1>
				<div className="hidden h-10 font-['Alata', sans-serif] md:flex md:space-x-8 ">
					<div className='group'>
						<Link href=''> About </Link>
						<div className='item'></div>
					</div>
					<div className='group'>
						<Link href='/About'> Products </Link>
						<div className='item'></div>
					</div>
					<div className='group'>
						<Link href='/About'> Custom </Link>
						<div className='item'></div>
					</div>
				</div>
				<div className='md:hidden'>
					<button
						onClick={handleToggle}
						type='button'
						className={`z-40 block hamburger md:hidden focus:outline-none ${
							navbarOpen ? 'open' : 'close'
						}`}
					>
						<span className='hamburger-top' />
						<span className='hamburger-middle' />
						<span className='hamburger-bottom' />
					</button>
				</div>
			</nav>
			<div
				className={`absolute md:hidden top-0 bottom-0 left-0  flex-col self-end  w-full min-h-screen py-1 pt-20 pl-12 space-y-3 text-lg text-white uppercase bg-black
				${itemOpen ? 'flex' : 'hidden'}`}
			>
				{' '}
				<a
					className='hover:text-gray-400'
					href='#'
				>
					About
				</a>
				<a
					className='hover:text-gray-400'
					href='#'
				>
					Products
				</a>
				<a
					className='hover:text-gray-400'
					href='#'
				>
					Events
				</a>
				<a
					className='hover:text-gray-400'
					href='#'
				>
					Custom
				</a>
			</div>
		</>
	);
}
