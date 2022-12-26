import { ProviderProps } from '../models/InterFaces';

const Card: React.FC<ProviderProps> = (props) => {
	return <div className="max-sm:rounded-lg shadow-xl">{props.children}</div>;
};

export default Card;
