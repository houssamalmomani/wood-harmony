import Head from 'next/head';
import Categories from '../../components/categories/Categories';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function products(props) {
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>

			<Categories locale={props.locale} />
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
