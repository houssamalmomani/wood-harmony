import Hero from './Hero';
import { ProviderProps } from '../models/InterFaces';
import Footer from './Footer';
const Layout: React.FC<ProviderProps> = (props) => {
	return (
		<>
			<main className="overflow-hidden">{props.children}</main>
			<div className="  ">
				<Footer />
			</div>
		</>
	);
};
export default Layout;
