import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import CartProvider from '../components/store/CartProvider';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

export function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
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
		</SessionProvider>
	);
}
export default appWithTranslation(App);
