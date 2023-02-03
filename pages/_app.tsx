import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import CartProvider from '../components/store/CartProvider';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

export function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider
				enableSystem={true}
				attribute="class"
			>
				<CartProvider>
					<Layout>
						<AnimatePresence>
							<motion.div
								key={router.route}
								initial="initialState"
								animate="animateState"
								exit="exitState"
								transition={{ duaration: 0.75 }}
								variants={{
									initialState: {
										opacity: 0,
									},
									animateState: {
										opacity: 1,
									},
									exitState: {
										opacity: 0,
									},
								}}
								className="base-page-size"
							>
								<Component {...pageProps} />
								<Analytics />
							</motion.div>
						</AnimatePresence>
					</Layout>
				</CartProvider>
			</ThemeProvider>
		</SessionProvider>
	);
}
export default appWithTranslation(App);
