import { MouseEventHandler } from 'react';

const BtnClose: React.FC<{ close: MouseEventHandler }> = (props) => {
	return (
		<button
			onClick={props.close}
			className=" w-10 h-10 z-30 p-1.5 relative "
		>
			<div className="w-6 h-0.5 bg-[#00ed00] absolute rounded-md -rotate-45"></div>
			<div
				className={`w-6 h-0.5 bg-[#00ed00] absolute rounded-md rotate-45`}
			></div>
		</button>
	);
};
export default BtnClose;
