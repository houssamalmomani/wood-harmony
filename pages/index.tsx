import Categories from '../components/categories/Categories';
import Head from 'next/head';
import CustomIt from '../components/layout/CustomIt';
import Hero from '../components/layout/Hero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import About from '../components/layout/About';
import { motion } from 'framer-motion';

export default function Home() {
	const { t } = useTranslation();
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>

			<>
				<motion.div
					initial={{ y: 25, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.75 }}
				>
					<Hero />
				</motion.div>
				<About /> <Categories /> <CustomIt />
			</>
		</>
	);
}

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['home', 'common'], null)),
		},
	};
}
