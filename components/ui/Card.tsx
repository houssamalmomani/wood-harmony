const Card: React.FC<any> = (props) => {
	return (
		<div className="max-sm:rounded-lg overflow-hidden drop-shadow-2xl ">
			{props.children}
		</div>
	);
};

export default Card;
