import Link from 'next/link';
import React, { useState } from 'react';
import DarkModeBtn from './DarkModeBtn';
import Cart from '../cart/Cart';

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
					className="hover:text-gray-400 md:hover:text-white
								 md:hover:border-b-2 border-white"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					{title}
				</Link>
			))}
		</>
	);

	return (
		<>
			<div className="w-full bg-slate-900  dark:bg-slate-800 fixed top-0 z-40 bg-opacity-70 dark:bg-opacity-70">
				<div className="  z-10 container max-w-7xl mx-auto  px-5 xl:px-0 md:py-8 py-4">
					<nav
						className="z-20 flex flex-row-reverse items-center 
					justify-between font-Alata text-white"
					>
						<Cart />
						<h1
							className=" font-Orbitron text-slate-200
										md:text-3xl text-md lg:pr-60"
						>
							Wood Harmony
						</h1>
						<div className="hidden md:flex gap-5 font-alata  ">
							<div className=" space-x-5">{navItemsHandler}</div>
							<DarkModeBtn />
						</div>
						<div className="md:hidden pt-2">
							<button
								onClick={() => setNavbarOpen(!navbarOpen)}
								type="button"
								className={`z-40 block hamburger 
							               md:hidden focus:outline-none nav-animation 
										  ${navbarOpen ? 'open  animate-pulse' : 'close'}`}
							>
								<span className="hamburger-top nav-animation" />
								<span className="hamburger-middle nav-animation" />
								<span className="hamburger-bottom nav-animation" />
							</button>
						</div>
					</nav>
					<div
						className={`z-30 absolute md:hidden top-0 bottom-0 bg-opacity-80
									left-0 w-full min-h-screen py-1 pt-20 pl-12  
									slide-down text-lg text-white uppercase bg-black 
									${navbarOpen ? ' block' : 'hidden'}`}
					>
						<div className=" gap-7 flex flex-col items-start ">
							{navItemsHandler}
						</div>

						<div className=" absolute top-72">
							<DarkModeBtn />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
