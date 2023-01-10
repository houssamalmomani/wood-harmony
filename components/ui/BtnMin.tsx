const BtnMin: React.FC<{ onAdd: any }> = (props) => {
	return (
		<button
			onClick={props.onAdd}
			className="w-8 h-8  rounded-full shadow-md dark:bg-slate-800  "
		>
			<div className=" ">
				<div className=" w-3 h-0.5 bg-[#00ed00] rounded-xl inline-block mb-1 " />
			</div>
		</button>
	);
};
export default BtnMin;
