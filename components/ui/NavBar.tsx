import Link from 'next/link';
import React, { useState } from 'react';
import DarkModeBtn from './DarkModeBtn';

const NavBar: React.FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

	const navItems: string[][] = [
		['Home', '/'],
		['Categories', '/categories'],
		['All Products', '/all-products'],
	];

	const navItemsHandler = (
		<>
			{navItems.map(([title, url]) => (
				<Link
					href={`${url}`}
					key={`${title}`}
					className="hover:text-gray-400 md:hover:text-white md:hover:border-b-2 border-white"
				>
					{title}
				</Link>
			))}
		</>
	);

	return (
		<>
			<nav className=" z-20 flex items-center justify-between  font-Alata text-white">
				<h1 className="move-in-left font-Orbitron md:text-3xl text-slate-200 shadow-xl">
					Wood Harmony
				</h1>

				<div className="hidden h-10  md:flex gap-5 font-alata move-in-bottom ">
					<DarkModeBtn />
					<div className=" space-x-6">{navItemsHandler}</div>
				</div>
				<div className="md:hidden">
					<button
						onClick={() => setNavbarOpen(!navbarOpen)}
						type="button"
						className={`hover:animate-bounce z-40 block hamburger md:hidden focus:outline-none nav-animation ${
							navbarOpen ? 'open' : 'close'
						}`}
					>
						<span className="hamburger-top nav-animation" />
						<span className="hamburger-middle nav-animation" />
						<span className="hamburger-bottom nav-animation" />
					</button>
				</div>
			</nav>
			<div
				className={`z-30 absolute md:hidden top-0 bottom-0 left-0 w-full min-h-screen py-1 pt-20 pl-12  text-lg text-white uppercase bg-black 
				${navbarOpen ? ' block' : 'hidden'}`}
			>
				<div className="space-y-5 inline-flex flex-col items-start ">
					{navItemsHandler}
				</div>

				<div className=" absolute top-72">
					<DarkModeBtn />
				</div>
			</div>
		</>
	);
};

export default NavBar;
