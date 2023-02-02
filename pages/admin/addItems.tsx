import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AddItemDb from '../../components/admin/AddItemDb';
import { getSession } from 'next-auth/react';

const AddItems: any = (): any => {
	return <AddItemDb />;
};

export async function getServerSideProps(context: any) {
	const session = await getSession({ req: context.req });
	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	return {
		props: {
			session,

			...(await serverSideTranslations(
				context.locale,
				['home', 'common'],
				null,
				['en', 'ar']
			)),
		},
	};
}
export default AddItems;
