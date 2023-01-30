import { MouseEventHandler } from 'react';

const Btn: React.FC<{ title: string; onAdd: MouseEventHandler }> = (props) => {
	return (
		<button
			onClick={props.onAdd}
			className=" px-6 py-1 text-sm tracking-widest border-2
								 font-alata hover:bg-black border-black
								 dark:border-white
                dark:hover:bg-white hover:text-white 
					  	 	dark:hover:text-black uppercase rounded-full hover:border-black "
		>
			{props.title}
		</button>
	);
};
export default Btn;
