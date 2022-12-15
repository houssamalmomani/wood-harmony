import NavBar from './NavBar';

export default function Header() {
	return (
		<header id='hero'>
			<div className='container max-w-6xl mx-auto px-6 py-12'>
				<NavBar />
				<div className='heder-text'>purely handmade</div>
			</div>
		</header>
	);
}
