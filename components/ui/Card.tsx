import { ProviderProps } from '../models/InterFaces';

const Card: React.FC<ProviderProps> = (props) => {
	return <div>{props.children}</div>;
};
export default Card;
