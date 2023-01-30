import { onValue, ref } from 'firebase/database';
import { dbR } from '../../pages/api/firebaseConfig';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Orders: React.FC = () => {
	const [orders, setOrders] = useState<any>([]);

	useEffect(() => {
		const ordersRef = ref(dbR, `/orders/`);
		onValue(ordersRef, (snapshot) => {
			setOrders([]);
			const data = snapshot.val();
			if (data !== null) {
				Object.values(data).map((order) => {
					setOrders((oldOrders: any) => [...oldOrders, order]);
				});
			}
		});
	}, [setOrders]);

	return (
		<div className="max-w-4xl mx-auto  py-52">
			{orders.map((order: any) => (
				<div key={order.userData.tel}>
					<div className="space-y-5">
						{order.orderItems.map((items: any) => (
							<div
								key={items.id}
								className="flex flex-row justify-between "
							>
								<Image
									src={items.image[0]}
									alt={items.title}
									width={200}
									height={200}
								/>
								<p> {`Price: ${items.price} JOD`} </p>
							</div>
						))}
					</div>
					<div className="mt-5 flex flex-col gap-2">
						<p>{`Name: ${order.userData.name}`}</p>
						<p> {`Address: ${order.userData.address}`} </p>
						<p> {`Phone Number: ${order.userData.tel} `}</p>
					</div>
					<hr className="my-5" />
				</div>
			))}
		</div>
	);
};

export default Orders;
