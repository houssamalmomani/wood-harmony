import { MouseEventHandler } from 'react';
import Btn from '../ui/Btn';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

const CheckoutForm: React.FC<{ cancel: MouseEventHandler; onConfirm: any }> = (
	props
) => {
	const { t } = useTranslation('common');
	const { locale } = useRouter();

	const formik = useFormik({
		initialValues: {
			name: '',
			address: '',
			phone: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('please inter your name'),
			phone: Yup.string()
				.required('please inter your phone number!')
				.min(10, 'please inter a valid number with 10 or 15 number')
				.max(15, 'please inter a valid number between 10 and 15 number'),
			address: Yup.string().required('please inter  your address!'),
		}),
		onSubmit: async (values) => {
			props.onConfirm({
				name: values.name,
				address: values.address,
				tel: values.phone,
			});
		},
	});
	console.log(formik.values);

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="slide-down max-w-sm "
		>
			<div
				className={`flex flex-col gap-1 mt-2  ${
					locale === 'ar' && 'items-end '
				}`}
			>
				<label
					htmlFor={'name'}
					className={`font-Josefin capitalize ${
						formik.touched.name && formik.errors.name && 'text-red-400 '
					}`}
				>
					{`${t(
						formik.touched.name && formik.errors.name
							? formik.errors.name
							: 'name'
					)}`}
				</label>
				<input
					type={'text'}
					id={'name'}
					placeholder={`${t('please inter your full name')}`}
					onChange={formik.handleChange}
					value={formik.values.name}
					onBlur={formik.handleBlur}
					className={`rounded-md  border-[1px] font-Josefin pl-2 w-full
                  text-black bg-white drop-shadow-lg h-10 placeholder-slate-400
									 placeholder-opacity-70 placeholder:italic
									 ${
											formik.touched.name &&
											formik.errors.name &&
											'text-red-400 border-2 border-red-400'
										} ${
						locale === 'ar' &&
						'placeholder:fixed placeholder:right-3 placeholder:bottom-1.5'
					}`}
				/>
				<label
					htmlFor={'address'}
					className={`font-Josefin capitalize ${
						formik.touched.address && formik.errors.address && 'text-red-400 '
					}`}
				>
					{`${t(
						formik.touched.address && formik.errors.address
							? formik.errors.address
							: 'address'
					)}`}
				</label>
				<input
					type={'text'}
					id={'address'}
					placeholder={`${t('try to be specific')}`}
					onChange={formik.handleChange}
					value={formik.values.address}
					onBlur={formik.handleBlur}
					className={`rounded-md  border-[1px] font-Josefin pl-2 w-full
                  text-black bg-white drop-shadow-lg h-10 placeholder-slate-400
									 placeholder-opacity-70 placeholder:italic
									 ${
											formik.touched.address &&
											formik.errors.address &&
											'text-red-400 border-2 border-red-400'
										} ${
						locale === 'ar' &&
						'placeholder:fixed placeholder:right-3 placeholder:bottom-1.5'
					}`}
				/>

				<label
					htmlFor={'phone'}
					className={`font-Josefin capitalize ${
						formik.touched.phone && formik.errors.phone && 'text-red-400 '
					}`}
				>
					{`${t(
						formik.touched.phone && formik.errors.phone
							? formik.errors.phone
							: 'phone number'
					)}`}
				</label>
				<input
					type="tel"
					id={'phone'}
					placeholder={`${t('please inter a valid number')}`}
					onChange={formik.handleChange}
					value={formik.values.phone}
					onBlur={formik.handleBlur}
					className={`rounded-md  border-[1px] font-Josefin pl-2 w-full
                  text-black bg-white drop-shadow-lg h-10 placeholder-slate-400
									 placeholder-opacity-70 placeholder:italic
									 ${
											formik.touched.phone &&
											formik.errors.phone &&
											'text-red-400 border-2 border-red-400'
										} ${
						locale === 'ar' &&
						'placeholder:fixed placeholder:right-3 placeholder:bottom-1.5'
					}`}
				/>
			</div>

			<div
				className={`flex flex-row justify-evenly mt-5 ${
					locale === 'ar' && 'flex-row-reverse'
				}`}
			>
				<Btn
					title={t('confirm')}
					onAdd={() => 'onsubmit'}
				/>
				<Btn
					title={t('cancel')}
					onAdd={props.cancel}
				/>
			</div>
		</form>
	);
};
export default CheckoutForm;
