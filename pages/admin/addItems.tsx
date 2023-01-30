import AddItemDb from '../../components/admin/AddItemDb';
import { getSession } from 'next-auth/react';

const addItems: any = (): any => {
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
		},
	};
}
export default addItems;
