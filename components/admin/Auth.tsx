import { FormEvent, useRef } from 'react';
import BtnClose from '../ui/BtnClose';

const Auth: React.FC<any> = (props) => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		const enteredEmail = emailRef.current?.value;
		const enteredPassword = passwordRef.current?.value;
	};
	return (
		<>
			{props.auth && (
				<>
					<div className="fixed right-5 top-5  animate-pulse z-30">
						<BtnClose close={() => props.close(false)} />
					</div>
					<form
						className={`fixed  top-0 bottom-0  
                        left-0 w-full min-h-screen slide-down
                      bg-black bg-opacity-80
                      ${props.auth ? ' fixed z-20' : 'hidden'}`}
						onSubmit={submitHandler}
					>
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
							/>
							<button className=" rounded-lg h-12 bg-[#00ed00] ">Log in</button>
						</div>
					</form>
				</>
			)}
		</>
	);
};
export default Auth;
