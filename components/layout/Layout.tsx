import Hero from './Hero';
import { ProviderProps } from '../models/InterFaces';
import Footer from './Footer';
const Layout: React.FC<ProviderProps> = (props) => {
	return (
		<>
			<Hero />
			<main>{props.children}</main>
			<Footer />
		</>
	);
};
export default Layout;
