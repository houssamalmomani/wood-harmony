import { useState } from 'react';
import BtnClose from '../ui/BtnClose';
import { signIn, useSession } from 'next-auth/react';
import LoadingSpin from '../ui/LoadingSpin';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

const Auth: React.FC<any> = (props) => {
	const { status } = useSession();
	const [isLogin, setIsLogin] = useState(false);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email').required('Required'),
			password: Yup.string()
				.required('please inter your phone number!')
				.min(6, 'please inter a valid number with 10 or 15 number'),
		}),
		onSubmit: async (values) => {
			const enteredEmail = formik.values.email;
			const enteredPassword = formik.values.password;

			if (isLogin) {
				const result = await signIn('credentials', {
					email: enteredEmail,
					password: enteredPassword,
					redirect: false,
				});

				if (!result?.error) {
					router.replace('/admin/addItems');
				}
			}
			setIsLogin(false);
		},
	});

	return (
		<>
			{props.auth && (
				<>
					<div className="fixed right-5 top-5  animate-pulse z-30">
						<BtnClose
							close={() => props.close((prevState: boolean) => !prevState)}
						/>
					</div>
					<form
						className={`fixed  top-0 bottom-0  
						left-0 w-full min-h-screen slide-down
						bg-black bg-opacity-80
                      ${props.auth ? ' fixed z-20' : 'hidden'}`}
						onSubmit={formik.handleSubmit}
					>
						{status === 'loading' ? (
							<LoadingSpin />
						) : (
							<div className="flex flex-col gap-5 max-w-xl mx-auto px-[5%] my-28 sm:my-40 text-black">
								<input
									id="email"
									type="email"
									className=" rounded-md h-12 px-4 bg-white font-Josefin"
									placeholder={'Email'}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
								/>

								<input
									id="password"
									type="password"
									className=" rounded-md h-12 px-4 font-Josefin bg-white"
									placeholder={`${
										formik.errors.password
											? 'Inter password with more than 6 characters'
											: 'password'
									}`}
									onChange={formik.handleChange}
									value={formik.values.password}
									onBlur={formik.handleBlur}
								/>
								<button
									className=" rounded-lg h-12 bg-[#00ed00] "
									onClick={() => setIsLogin(true)}
								>
									Log in
								</button>
								<h1 className="text-[#00ed00] text-center font-Josefin"></h1>
							</div>
						)}
					</form>
				</>
			)}
		</>
	);
};
export default Auth;
