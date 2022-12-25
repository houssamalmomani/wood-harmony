const SeeMore: React.FC = () => {
	return (
		<>
			<p
				className=" md:hidden block absolute px-6 duration-200 text-xs md:text-sm bottom-4 right-0 md:bottom-8 
			md:px-10 group-hover:scale-110 group-hover:text-black ;"
			>
				Tap to see more
			</p>
			<p
				className=" hidden md:block absolute px-6 duration-200 text-xs md:text-sm bottom-4 right-0 md:bottom-8 
			md:px-10 group-hover:scale-110 group-hover:text-black ;"
			>
				Click
			</p>
		</>
	);
};

export default SeeMore;
