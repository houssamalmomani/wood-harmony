import { FormEvent, MouseEventHandler, useRef, useState } from 'react';
import Btn from '../ui/Btn';
const isEmpty = (value: any) => value.trim() === '';

const CheckoutForm: React.FC<{ cancel: MouseEventHandler; onConfirm: any }> = (
	props
) => {
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
					className="flex flex-col gap-1 mt-2 "
				>
					<label
						htmlFor={data.htmlFor}
						className=" font-Josefin capitalize "
					>
						{data.info}
					</label>
					<input
						type={data.type}
						id={data.htmlFor}
						placeholder={data.placeholder}
						ref={data.ref}
						className={`rounded-md  border-[1px] font-Josefin pl-2
                  text-black bg-white drop-shadow-lg h-10 
									${!data.validity && 'bg-red-200'}`}
					/>
					{!data.validity && (
						<p className=" text-red-600 text-sm capitalize">
							please inter your {data.info}
						</p>
					)}
				</div>
			))}
			<div className="flex flex-row justify-evenly mt-5">
				<Btn title="confirm" />
				<Btn
					title="cancel"
					onAdd={props.cancel}
				/>
			</div>
		</form>
	);
};
export default CheckoutForm;
