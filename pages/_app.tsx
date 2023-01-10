import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import CartProvider from '../components/store/CartProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			enableSystem={true}
			attribute="class"
		>
			<CartProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartProvider>
		</ThemeProvider>
	);
}
