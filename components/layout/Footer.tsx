import Image from 'next/image';
import Img from '../../public/assets/desktop.jpg';
import instagram from '../../public/assets/icon-instagram.svg';
import facebook from '../../public/assets/icon-facebook.svg';
import whatsapp from '../../public/icon-whatsapp.svg';

const Footer: React.FC = () => {
	return (
		<>
			<div className=" bg-slate-900 dark:bg-slate-800 py-10">
				<div className="container max-w-6xl mx-auto  flex md:flex-row flex-col md:justify-between justify-center items-center md:items-stretch md:px-2">
					<div className="">
						<h1 className="text-white font-Orbitron font-extrabold text-xl my-10">
							Wood Harmony
						</h1>
					</div>
					<div className="   flex flex-col border-t-2  border-slate-400 md:border-t-0 py-5 items-center gap-5 ">
						<div className="flex  gap-8  ">
							<span className="relative  ">
								<a href=" https://www.instagram.com/woodharmony.jo/">
									<Image
										className=" object-cover"
										src={instagram}
										alt=""
									/>
								</a>
							</span>
							<span className=" relative">
								<a href="https://www.facebook.com/woodHarmony.jo">
									<Image
										className=" object-cover"
										src={facebook}
										alt=""
									/>
								</a>
							</span>
							<span className="relative svg ">
								<a href=" https://www.instagram.com/woodharmony.jo/">
									<Image
										className=" object-cover svg"
										src={whatsapp}
										alt=""
										width={26}
									/>
								</a>
							</span>
						</div>

						<p className=" text-slate-400 font-Josefin  my-2 font-bold text-center">
							2023 &#169; Wood Harmony. All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
