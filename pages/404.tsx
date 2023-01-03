import Link from 'next/link';
import Btn from '../components/ui/Btn';

function NotFound() {
	return (
		<>
			<div className=" h-screen mx-auto space-y-52 font-Orbitron max-w-6xl mt-32 ">
				<h1 className="text-6xl">Oooooops....</h1>
				<h2 className="text-6xl mb-20">That page cannot be found.</h2>
				<div className=" mx-auto">
					<Link href={'/'}>
						<Btn title="go back" />
					</Link>
				</div>
			</div>
		</>
	);
}
export default NotFound;
