import { onValue, ref } from 'firebase/database';
import Orders from '../../components/admin/Orders';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dbR } from '../api/firebaseConfig';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function OrdersHandler(): JSX.Element {
	const [orders, setOrders] = useState<any>([]);
	const [Loading, setLoading] = useState(false);

	const { status } = useSession();
	const router = useRouter();
	if (status === 'unauthenticated') router.replace('/');

	useEffect(() => {
		setLoading(true);
		const ordersRef = ref(dbR, `/orders/`);
		onValue(ordersRef, (snapshot) => {
			setOrders([]);
			const data = snapshot.val();
			if (data !== null) {
				Object.values(data).map((order) => {
					setOrders((oldOrders: any) => [...oldOrders, order]);
				});
			}
			setLoading(false);
		});
	}, [setOrders]);
	return (
		<Orders
			orders={orders}
			loading={Loading}
		/>
	);
}
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
