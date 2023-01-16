const BtnItem: React.FC<{ onAdd: any }> = (props) => {
	return (
		<button
			onClick={props.onAdd}
			className="w-8 h-8  relative rounded-full shadow-md dark:bg-slate-800  "
		>
			<div className=" absolute   right-[50%] top-[47%] translate-x-1/2 ">
				<div className=" w-3 h-0.5 bg-[#00ed00] rounded-xl fixed " />
				<div className="w-3 h-0.5  bg-[#00ed00] rounded-xl rotate-90 " />
			</div>
		</button>
	);
};
export default BtnItem;
