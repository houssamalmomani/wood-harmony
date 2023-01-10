const Btn: React.FC<{ title: string; onAdd: any }> = (props) => {
	return (
		<button
			onClick={props.onAdd}
			className=" px-6 py-1 tracking-widest border-2 border-black
						dark:border-white font-alata hover:bg-black
                    	dark:hover:bg-white hover:text-white
					  	 dark:hover:text-black uppercase rounded-full"
		>
			{props.title}
		</button>
	);
};
export default Btn;
