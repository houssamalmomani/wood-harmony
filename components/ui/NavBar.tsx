import Link from 'next/link';
import React, { useState } from 'react';
import DarkModeBtn from './DarkModeBtn';
import Cart from '../cart/Cart';
import Auth from '../admin/Auth';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import AuthHelper from './AuthHelper';

const NavBar: React.FC = () => {
	const { locale } = useRouter();
	const { t } = useTranslation('common');
	const { status } = useSession();
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [authForm, setAuthForm] = useState(false);

	const signInHandler = () => {
		setAuthForm((prevState) => !prevState);
		setNavbarOpen((prevState) => !prevState);
	};
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
					key={`${url}`}
					className="hover:text-gray-400 
								 			 border-white"
					onClick={() => setNavbarOpen((prevState) => !prevState)}
				>
					{t(title)}
				</Link>
			))}
		</>
	);

	const langHandler = (
		<>
			{locale === 'en' ? (
				<Link
					href={'/'}
					locale="ar"
					className="svg-gray"
				>
					عربي
				</Link>
			) : (
				<Link
					href={'/'}
					locale="en"
					className="svg-gray font-thin "
				>
					EN
				</Link>
			)}
		</>
	);
	return (
		<>
			<div
				className="w-full bg-slate-900  dark:bg-slate-800 fixed 
				top-0 z-40 bg-opacity-70 dark:bg-opacity-70"
			>
				<div
					className="z-10 container max-w-7xl mx-auto 
							px-5 xl:px-0 md:py-8 py-4"
				>
					<nav
						className={`z-30 flex flex-row items-center 
						justify-between font-Alata text-white
						${locale === 'en' && 'flex-row-reverse'}`}
					>
						<Cart />

						{status === 'unauthenticated' && (
							<Auth
								auth={authForm}
								close={setAuthForm}
							/>
						)}
						<h1 className=" font-Orbitron text-slate-200 sm:text-xl text-sm ">
							Wood Harmony
						</h1>
						<div className="hidden md:flex gap-5 font-alata  ">
							<div
								className={`flex gap-5 flex-row ${
									locale === 'ar' && 'flex-row-reverse'
								}`}
							>
								{navItemsHandler}

								<AuthHelper
									val={signInHandler}
									navState={setNavbarOpen}
								/>
								{langHandler}

								<DarkModeBtn />
							</div>
						</div>
						<div className="md:hidden pt-2">
							<button
								onClick={() => setNavbarOpen((prevState) => !prevState)}
								type="button"
								className={` block hamburger md:hidden focus:outline-none nav-animation 
								${navbarOpen ? 'open  animate-pulse z-30' : 'close z-10'}`}
							>
								<span className="hamburger-top nav-animation" />
								<span className="hamburger-middle nav-animation" />
								<span className="hamburger-bottom nav-animation" />
							</button>
						</div>
					</nav>
					<div
						className={`z-10 absolute md:hidden top-0 bottom-0 
						bg-opacity-80 left-0 w-full min-h-screen py-1 pt-20 pl-12  
						slide-down text-lg text-white uppercase bg-black 
						${navbarOpen ? ' block' : 'hidden'}`}
					>
						<div
							className={` gap-7 flex flex-col items-start ${
								locale === 'ar' && 'items-end pr-10'
							}`}
						>
							{navItemsHandler}

							<AuthHelper
								val={signInHandler}
								navState={setNavbarOpen}
							/>

							{langHandler}
							<DarkModeBtn />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
