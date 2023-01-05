import Link from 'next/link';

const Btn: React.FC<{ title: string; onAdd: any }> = (props) => {
	return (
		<button
			onClick={() => {
				props.onAdd;
			}}
			className=" px-10 py-2 my-0 font-bold tracking-widest  
                        border-2 border-black dark:border-white font-alata hover:bg-black
                      dark:hover:bg-white hover:text-white dark:hover:text-black uppercase rounded-full"
		>
			{props.title}
		</button>
	);
};
export default Btn;
