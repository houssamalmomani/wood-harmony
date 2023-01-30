import Orders from '../../components/admin/Orders';
import { NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const orders: NextPage = (): JSX.Element => {
	const { status } = useSession();
	const router = useRouter();
	if (status === 'unauthenticated') router.replace('/');

	return <Orders />;
};
export async function getServerSideProps(context) {
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
export default orders;
