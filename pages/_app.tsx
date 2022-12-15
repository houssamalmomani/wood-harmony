import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/layout/NavBar';
import Header from '../components/layout/Header';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
}
