import Head from 'next/head';
import Categories from '../../components/categories/Categories';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function products() {
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>

			<Categories />
		</>
	);
}
export async function getStaticProps({ locale }: any) {
	return {
		props: {
			locale,
			...(await serverSideTranslations(locale, ['home', 'common'], null)),
			// Will be passed to the page component as props
		},
	};
}
