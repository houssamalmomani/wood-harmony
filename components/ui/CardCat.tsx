import { ProviderProps } from '../models/InterFaces';

const CardCat: React.FC<ProviderProps> = (props) => {
	return (
		<>
			<div
				className="flex flex-col justify-between items-center gap-5  
						   text-2xl md:text-4xl text-white md:flex-row
		 				   md:space-y-0 lg:space-x-8 font-Josefin "
			>
				{props.children}
			</div>
		</>
	);
};

export default CardCat;
