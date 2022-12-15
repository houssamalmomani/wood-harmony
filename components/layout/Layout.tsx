import Header from './Header';
import { ProviderProps } from '../models/InterFaces';
const Layout: React.FC<ProviderProps> = (props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	);
};
export default Layout;
