import { FormEvent, useRef, useState } from 'react';
import BtnClose from '../ui/BtnClose';
import { signIn, useSession } from 'next-auth/react';
import LoadingSpin from '../ui/LoadingSpin';
import { useRouter } from 'next/router';
const Auth: React.FC<any> = (props) => {
	const { status } = useSession();
	const [isLogin, setIsLogin] = useState(false);
	const router = useRouter();
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const submitHandler = async (event: FormEvent) => {
		event.preventDefault();
		const enteredEmail = emailRef.current?.value;
		const enteredPassword = passwordRef.current?.value;

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
	};

	return (
		<>
			{props.auth && (
				<>
					<div className="fixed right-5 top-5  animate-pulse z-30">
						<BtnClose close={() => props.close((prevState) => !prevState)} />
					</div>
					<form
						className={`fixed  top-0 bottom-0  
						left-0 w-full min-h-screen slide-down
						bg-black bg-opacity-80
                      ${props.auth ? ' fixed z-20' : 'hidden'}`}
						onSubmit={submitHandler}
					>
						{status === 'loading' ? (
							<LoadingSpin />
						) : (
							<div className="flex flex-col gap-5 max-w-xl mx-auto px-[5%] my-28 sm:my-40 text-black">
								<input
									type="email"
									className=" rounded-md h-12 px-4 bg-white font-Josefin"
									placeholder="Email"
									ref={emailRef}
								/>

								<input
									type="password"
									className=" rounded-md h-12 px-4 font-Josefin bg-white"
									placeholder="Password"
									ref={passwordRef}
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
