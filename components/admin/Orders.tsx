import Image from 'next/image';
import LoadingSpin from '../ui/LoadingSpin';

const Orders: React.FC<any> = (props: any) => {
	return (
		<>
			{props.loading ? (
				<div className="flex items-center justify-center h-screen ">
					<LoadingSpin />
				</div>
			) : (
				<div
					className={`max-w-4xl mx-auto  py-40 ${
						props.orders.length === 0 && 'h-screen'
					}`}
				>
					{props.orders?.map((order: any) => (
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
			)}
		</>
	);
};

export default Orders;
