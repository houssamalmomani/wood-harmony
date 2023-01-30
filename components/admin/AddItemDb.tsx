import { FormEvent, useRef, useState } from 'react';
import { db, itemsCol, storage } from '../../pages/api/firebaseConfig';
import {
	addDoc,
	arrayUnion,
	doc,
	updateDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from '@firebase/storage';
import LoadingSpin from '../ui/LoadingSpin';
import { useSession } from 'next-auth/react';

const AddItemDb: React.FC = () => {
	const { status } = useSession();
	const [file, setFile] = useState<any>([]);
	const [progress, setProgress] = useState(false);
	const filesHandler = (e: any) => {
		for (let i = 0; i < e.target.files.length; i++) {
			const newImages = e.target.files[i];
			setFile((prev: any) => [...prev, newImages]);
		}
	};

	const categoryRef = useRef('');
	const titleRef = useRef('');
	const descriptionRef = useRef('');
	const weightRef = useRef(0);
	const dimensionsRef = useRef('');
	const priceRef = useRef(0);

	const formData = [
		['title', 'text', titleRef],
		['description', 'text', descriptionRef],
		['dimensions', 'text', dimensionsRef],
		['weight', 'number', weightRef],
		['price', 'number', priceRef],
	];
	const confirmHandler = async (event: FormEvent) => {
		event.preventDefault();
		setProgress(true);
		try {
			const docRef = await addDoc(itemsCol, {
				category: categoryRef.current.value,
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				weight: +weightRef.current.value,
				dimensions: dimensionsRef.current.value,
				price: +priceRef.current.value,
				timestamp: serverTimestamp(),
			});

			await Promise.all(
				file.map((image: any) => {
					const imageRef = ref(storage, `products/${docRef.id}/${image.name}`);
					uploadBytes(imageRef, image, 'data_url').then(async () => {
						const downloadURL = await getDownloadURL(imageRef);
						await updateDoc(doc(db, 'items', docRef.id), {
							image: arrayUnion(downloadURL),
						});
						setProgress(false);
					});
				})
			);
			setFile([]);
		} catch (error) {}
	};

	return (
		<>
			{progress || status === 'loading' ? (
				<div className="mx-auto text-center my-[50%]">
					<LoadingSpin />
				</div>
			) : (
				<form
					onSubmit={confirmHandler}
					id="form"
					className="flex flex-col  mt-24 md:mt-44 max-w-3xl mx-auto gap-10 px-2  capitalize"
				>
					<label htmlFor="files">choose images</label>
					<input
						type="file"
						onChange={filesHandler}
						id="files"
						name="file"
						multiple
					/>
					<div className="flex flex-col gap-5">
						<label
							htmlFor="category"
							className=" "
						>
							Category:
						</label>
						<select
							name="category"
							id="category"
							ref={categoryRef}
							className="h-12 rounded-md"
						>
							<option value="hand-bracelets"> hand bracelets</option>
							<option value="neck-laces">neck laces</option>
							<option value="key-chains">key chains</option>
						</select>
					</div>
					<div></div>
					{formData.map(([htmlFor, type, ref]) => (
						<div
							key={Math.random()}
							className="flex flex-col gap-5"
						>
							<label htmlFor={htmlFor}>{htmlFor}:</label>
							<input
								id={htmlFor}
								type={type}
								placeholder={htmlFor}
								ref={ref}
								className={`rounded-md  border-[1px] font-Josefin pl-2
						text-black bg-white drop-shadow-lg h-10 
						`}
								// ${!data.validity && 'bg-red-200'}
							/>
						</div>
					))}

					<div className="my-10 mx-auto">
						<button
							type="submit"
							form="form"
							value="submit"
							className=" px-6 py-1 text-sm tracking-widest border-2 border-black
					dark:border-white font-alata hover:bg-black
					dark:hover:bg-white hover:text-white
					dark:hover:text-black uppercase rounded-full  "
						>
							confirm
						</button>
					</div>
				</form>
			)}
		</>
	);
};
export default AddItemDb;
