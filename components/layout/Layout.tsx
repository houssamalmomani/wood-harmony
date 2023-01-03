import Footer from './Footer';
import NavBar from '../ui/NavBar';
const Layout: React.FC<any> = (props) => {
	return (
		<>
			<NavBar />
			<main className="overflow-hidden">{props.children}</main>
			<Footer />
		</>
	);
};
export default Layout;
