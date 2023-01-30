import { deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../pages/api/firebaseConfig';
import { useRouter } from 'next/router';
import LoadingSpin from '../ui/LoadingSpin';
import { useState } from 'react';
import { deleteObject, ref } from 'firebase/storage';

const DeleteItemDb: React.FC<{ id: string }> = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const docRef = doc(db, 'items', props.id);

	const deleteFromDbHandler = async () => {
		const fileRef = ref(storage, `products/${docRef.id}/b0.jpg`);
		setIsLoading(true);

		deleteObject(fileRef)
			.then(() => {})
			.catch((error) => {});

		try {
			await deleteDoc(docRef);
			throw new Error('Sorry something went wrong try later!');
		} catch {
			Error.toString();
		}
		setIsLoading(false);
		router.push('/all-products');
	};
	return (
		<div className="flex flex-col gap-2 items-center">
			{isLoading && <LoadingSpin />}
			<button
				className=" px-6 py-1 text-sm text-bold  tracking-widest 
										border-2 border-red-600
									dark:border-red-600 font-alata hover:bg-red-600
									dark:hover:bg-red-600 hover:text-white
									dark:hover:text-white uppercase rounded-full"
				onClick={deleteFromDbHandler}
			>
				Delete from db
			</button>
		</div>
	);
};
export default DeleteItemDb;
