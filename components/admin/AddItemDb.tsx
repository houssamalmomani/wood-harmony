import { useState } from 'react';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			category: '',
			dimensions: '',
			weight: 0,
			price: 0,
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.max(20, 'title must be 20 characters or less !')
				.required('please inter a title'),
			description: Yup.string()
				.max(30, 'description must be 30 characters or less !')
				.required('please inter a title'),
			category: Yup.string().required('please inter category'),
			dimensions: Yup.string()
				.max(20, 'dimensions must be 10 characters or less !')
				.required('please inter a dimensions'),
			weight: Yup.number()
				.max(300, 'weight must be 300 g or less !')
				.required('please inter a weight'),
			price: Yup.number()
				.max(100, 'price must be 100 JOD  or less !')
				.required('please inter a price'),
		}),
		onSubmit: async (values) => {
			setProgress(true);
			try {
				const docRef = await addDoc(itemsCol, {
					category: values.category,
					title: values.title,
					description: values.description,
					weight: values.weight,
					dimensions: values.dimensions,
					price: values.price,
					amount: 1,
					timestamp: serverTimestamp(),
				});

				await Promise.all(
					file.map((image: any) => {
						const imageRef = ref(
							storage,
							`products/${docRef.id}/${image.name}`
						);
						uploadBytes(imageRef, image).then(async () => {
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
		},
	});

	const formData = [
		[
			'title',
			'text',
			formik.values.title,
			formik.errors.title,
			formik.touched.title,
		],
		[
			'description',
			'text',
			formik.values.description,
			formik.errors.description,
			formik.touched.description,
		],
		[
			'dimensions',
			'text',
			formik.values.dimensions,
			formik.errors.dimensions,
			formik.touched.dimensions,
		],
		[
			'weight',
			'number',
			formik.values.weight,
			formik.errors.weight,
			formik.touched.weight,
		],
		[
			'price',
			'number',
			formik.values.price,
			formik.errors.price,
			formik.touched.price,
		],
	];

	return (
		<>
			{progress || status === 'loading' ? (
				<div className="flex items-center justify-center h-screen">
					<LoadingSpin />
				</div>
			) : (
				<form
					onSubmit={formik.handleSubmit}
					id="form"
					className="flex flex-col  mt-24 md:mt-44 max-w-3xl mx-auto gap-10 px-2 capitalize "
				>
					<label htmlFor="files">choose images</label>
					<input
						type="file"
						onChange={filesHandler}
						id="files"
						name="file"
						multiple
					/>
					<div className="flex flex-col">
						<label
							htmlFor="category"
							className={`h-12 rounded-md ${
								formik.touched.category &&
								formik.errors.category &&
								'text-red-400 '
							}`}
						>
							category:
						</label>
						<select
							name="category"
							id="category"
							onChange={formik.handleChange}
							value={formik.values.category}
							className={`h-12 rounded-md ${
								formik.touched.category &&
								formik.errors.category &&
								'text-red-400 border-2 border-red-400'
							}`}
						>
							<option></option>
							<option value="hand-bracelets"> hand bracelets</option>
							<option value="neck-laces">neck laces</option>
							<option value="key-chains">key chains</option>
						</select>
					</div>
					<div></div>
					{formData.map(([htmlFor, type, val, error, touch]: any) => (
						<div
							key={htmlFor}
							className="flex flex-col gap-5"
						>
							<label
								htmlFor={htmlFor}
								className={` ${touch && error && 'text-red-400 '}`}
							>
								{`${touch && error ? error : htmlFor}:`}
							</label>
							<input
								id={`${htmlFor}`}
								type={type}
								placeholder={htmlFor}
								onChange={formik.handleChange}
								value={val}
								onBlur={formik.handleBlur}
								className={`rounded-md  border-[1px] font-Josefin pl-2
						text-black bg-white drop-shadow-lg h-10 
						${touch && error && 'text-red-400 border-2 border-red-400'}`}
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
