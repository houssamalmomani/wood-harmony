import Link from 'next/link';
import React, { useState } from 'react';
import DarkBtn from './DarkBtn';

const NavBar: React.FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	return (
		<>
			<nav className=" z-20 flex items-center justify-between font-Alata font-bold text-white">
				<div className="flex flex-row gap-3 ">
					<h1 className="font-Orbitron text-xl ">Wood Harmony</h1>
				</div>
				<div className="hidden h-10  md:flex md:space-x-8 font-alata ">
					<DarkBtn />
					<div className="group ">
						<Link href="/"> Home </Link>
						<div className="item"></div>
					</div>
					<div className="group ">
						<Link href="/categories"> Categories </Link>
						<div className="item"></div>
					</div>
					<div className="group ">
						<Link href="/all-products"> All Products </Link>
						<div className="item"></div>
					</div>
					<div className="group ">
						<Link href="/"> Contact </Link>
						<div className="item"></div>
					</div>
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
				className={` z-30 absolute md:hidden top-0 bottom-0 left-0  flex-col self-end  w-full min-h-screen py-1 pt-20 pl-12  text-lg text-white uppercase bg-black 
				${navbarOpen ? 'flex' : 'hidden'}`}
			>
				<ul className="space-y-5 ">
					{' '}
					<Link
						className="hover:text-gray-400 "
						href="/"
					>
						Home
					</Link>
					<li>
						<Link
							className="hover:text-gray-400 "
							href="/categories"
						>
							Categories
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-gray-400"
							href="/all-products"
						>
							All Products
						</Link>
					</li>
					<li>
						<Link
							className="hover:text-gray-400 "
							href="/all-products"
						>
							Contact
						</Link>
					</li>
				</ul>
				<div className=" absolute top-72">
					<DarkBtn />
				</div>
			</div>
		</>
	);
};

export default NavBar;
