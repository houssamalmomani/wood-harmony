import { ProviderProps } from '../models/InterFaces';

const Card: React.FC<ProviderProps> = (props) => {
	return (
		<div className="max-sm:rounded-lg overflow-hidden drop-shadow-2xl ">
			{props.children}
		</div>
	);
};

export default Card;
