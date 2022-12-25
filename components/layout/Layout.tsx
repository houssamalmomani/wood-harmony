import Hero from './Hero';
import { ProviderProps } from '../models/InterFaces';
import Footer from './Footer';
const Layout: React.FC<ProviderProps> = (props) => {
	return (
		<>
			<main>{props.children}</main>
			<div className=" overflow-hidden ">
				<Footer />
			</div>
		</>
	);
};
export default Layout;
