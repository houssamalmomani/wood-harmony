import NavBar from './NavBar';

const FixedNav: React.FC = () => {
	return (
		<div className="w-full bg-slate-900 opacity-80 dark:bg-slate-800 fixed top-0 z-50">
			<div className="  z-10 container max-w-7xl mx-auto  px-5 xl:px-0 md:py-8 py-5">
				<NavBar />
			</div>
		</div>
	);
};

export default FixedNav;
