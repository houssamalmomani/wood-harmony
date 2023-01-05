import Link from 'next/link';
import Btn from '../components/ui/Btn';

function NotFound() {
	const goBackHandler = () => {
		return <Link href={'/'}></Link>;
	};
	return (
		<>
			<div className=" h-screen mx-auto space-y-52 font-Orbitron max-w-6xl mt-32 ">
				<h1 className="text-6xl">Oooooops....</h1>
				<h2 className="text-6xl mb-20">That page cannot be found.</h2>
				<div className=" mx-auto">
					<Btn
						title="go back"
						onAdd={goBackHandler}
					/>
				</div>
			</div>
		</>
	);
}
export default NotFound;
