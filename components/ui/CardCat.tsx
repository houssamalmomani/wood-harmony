const CardCat: React.FC<any> = (props) => {
	return (
		<>
			<div
				className="flex flex-col justify-between items-center gap-6  
						   			text-2xl md:text-4xl text-white md:flex-row
		 				     		font-Josefin"
			>
				{props.children}
			</div>
		</>
	);
};

export default CardCat;
