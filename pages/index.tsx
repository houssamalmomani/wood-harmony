import Categories from '../components/categories/Categories';
import Head from 'next/head';
import CustomIt from '../components/layout/CustomIt';
import Hero from '../components/layout/Hero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Home(props) {
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
				<Hero locale={props.locale} /> <Categories locale={props.locale} />{' '}
				<CustomIt />
			</>
		</>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['home', 'common'], null, [
				'en',
				'ar',
			])),
			// Will be passed to the page component as props
		},
	};
}
