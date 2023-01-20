const LoadingSpin: React.FC = () => {
	return (
		<>
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
			<p className=" font-Josefin ">Processing...</p>
		</>
	);
};
export default LoadingSpin;
