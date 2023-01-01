import Image, { StaticImageData } from 'next/image';
import instagram from '../../public/assets/icon-instagram.svg';
import facebook from '../../public/assets/icon-facebook.svg';
import whatsapp from '../../public/icon-whatsapp.svg';

const Footer: React.FC = () => {
	const icons: (string | StaticImageData)[][] = [
		[facebook, 'https://www.facebook.com/woodHarmony.jo', 'm1'],
		[instagram, ' https://www.instagram.com/woodharmony.jo/', 'm2'],
	];
	const iconsArray = (
		<>
			{icons.map(([icon, url, id]) => (
				<span key={`${id}`}>
					<a href={`${url}`}>
						<Image
							src={icon}
							alt=""
						/>
					</a>
				</span>
			))}
		</>
	);

	let date: string = new Date().getFullYear().toString();

	return (
		<>
			<div className=" bg-gray-800  md:py-10">
				<div
					className="container max-w-7xl mx-auto 
				 				flex md:flex-row flex-col md:justify-between 
				 				justify-center items-center md:px-2"
				>
					<div
						className="text-white font-Orbitron md:text-2xl 
									font-extrabold text-sm my-8"
					>
						<h1>Wood Harmony</h1>
					</div>
					<hr className=" w-full md:hidden" />
					<div
						className="flex flex-col 
						md:border-t-0 py-5 items-center gap-5 "
					>
						<div className="flex gap-8">{iconsArray}</div>

						<p
							className="text-slate-400 font-Josefin 
										text-xs  text-center"
						>
							{date} &#169; Wood Harmony. All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
