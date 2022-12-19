import Image from 'next/image';
import Img from '../../public/assets/desktop.jpg';
import instagram from '../../public/instagram3.png';
import facebook from '../../public/facebook.png';
import whatsapp from '../../public/whatsapp.png';

const Footer: React.FC = () => {
	return (
		<>
			<div className=" bg-black shadow-xl ">
				<div className="   flex flex-row justify-between items-center max-w-6xl mx-auto">
					<div className=" relative flex  bg-zinc-800  ">
						<Image
							className="clip-a object-cover max-w-lg  md:max-w-xl "
							src={Img}
							alt=""
							width={650}
						/>
						<div className=" absolute  top-40 left-48     ">
							<div className="flex  gap-7 px-2">
								<span className="relative  ">
									<a href=" https://www.instagram.com/woodharmony.jo/">
										<Image
											className=" object-cover"
											src={instagram}
											alt=""
											width={30}
										/>
									</a>
								</span>
								<span className=" ">
									<a href="https://www.facebook.com/woodHarmony.jo">
										<Image
											className=" object-cover"
											src={facebook}
											alt=""
											width={30}
										/>
									</a>
								</span>
								<span className="relative  ">
									<a href=" https://www.instagram.com/woodharmony.jo/">
										<Image
											className=" object-cover "
											src={whatsapp}
											alt=""
											width={30}
										/>
									</a>
								</span>
							</div>
							<p className=" text-slate-500 font-Josefin  my-2 ">
								&#169; 2023 Wood Harmony
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
