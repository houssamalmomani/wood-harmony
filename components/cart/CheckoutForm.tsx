import { FormEvent, MouseEventHandler, useRef, useState } from 'react';
import Btn from '../ui/Btn';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const isEmpty = (value: any) => value.trim() === '';

const CheckoutForm: React.FC<{ cancel: MouseEventHandler; onConfirm: any }> = (
	props
) => {
	const { t } = useTranslation('common');
	const { locale } = useRouter();
	const [formInputsValid, setFormInputValid] = useState({
		name: true,
		address: true,
		tel: true,
	});
	const nameInputRef = useRef('');

	const addressInputRef = useRef('');

	const telInputRef = useRef('');

	const confirmHandler = (event: FormEvent) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredTel = telInputRef.current.value;

		const nameValid = !isEmpty(enteredName);
		const addressValid = !isEmpty(enteredAddress);
		const telValid = !isEmpty(enteredTel);

		setFormInputValid({
			name: nameValid,
			address: enteredAddress,
			tel: enteredTel,
		});

		const formValid = nameValid && addressValid && telValid;

		if (!formValid) {
			return;
		}
		props.onConfirm({
			name: enteredName,
			address: enteredAddress,
			tel: enteredTel,
		});
	};
	const formInfo: string[][] | any = [
		{
			id: 'm1',
			htmlFor: 'name',
			info: 'name',
			type: 'text',
			placeholder: 'please inter your full name',
			ref: nameInputRef,
			validity: formInputsValid.name,
		},

		{
			id: 'm2',
			htmFor: 'address',
			info: 'address',
			type: 'text',
			placeholder: 'try to be specific',
			ref: addressInputRef,
			validity: formInputsValid.address,
		},

		{
			id: 'm3',
			htmlFor: 'number',
			info: 'phone number',
			type: 'tel',
			placeholder: 'please inter a valid number',
			ref: telInputRef,
			validity: formInputsValid.tel,
		},
	];

	console.log(formInfo, 'this is the form info');
	return (
		<form
			onSubmit={confirmHandler}
			className="slide-down max-w-sm "
		>
			{formInfo.map((data: any) => (
				<div
					key={data.id}
					className={`flex flex-col gap-1 mt-2  ${
						locale === 'ar' && 'items-end '
					}`}
				>
					<label
						htmlFor={data.htmlFor}
						className=" font-Josefin capitalize "
					>
						{t(data.info)}
					</label>
					<input
						type={data.type}
						id={data.htmlFor}
						placeholder={t(data.placeholder)}
						ref={data.ref}
						className={`rounded-md  border-[1px] font-Josefin pl-2 w-full
                  text-black bg-white drop-shadow-lg h-10 placeholder-slate-400
									 placeholder-opacity-70 placeholder:italic
									${!data.validity && 'bg-red-200'} ${
							locale === 'ar' &&
							'placeholder:fixed placeholder:right-3 placeholder:bottom-1.5'
						}`}
					/>
					{!data.validity && (
						<p className=" text-red-600 text-sm capitalize">
							{`${t('please inter your')} ${t(data.info)}`}
						</p>
					)}
				</div>
			))}
			<div
				className={`flex flex-row justify-evenly mt-5 ${
					locale === 'ar' && 'flex-row-reverse'
				}`}
			>
				<Btn title={t('confirm')} />
				<Btn
					title={t('cancel')}
					onAdd={props.cancel}
				/>
			</div>
		</form>
	);
};
export default CheckoutForm;
