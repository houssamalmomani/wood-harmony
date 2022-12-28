import Link from 'next/link';

const Btn: React.FC<{ title: string }> = (props) => {
	return (
		<button
			className=" px-10 py-2 my-0 font-bold tracking-widest  
                        border-2 border-black dark:border-white font-alata hover:bg-black
                      dark:hover:bg-white hover:text-white dark:hover:text-black uppercase"
		>
			{props.title}
		</button>
	);
};
export default Btn;
