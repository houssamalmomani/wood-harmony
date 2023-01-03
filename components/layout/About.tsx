import { StaticImageData } from 'next/image';

const About: React.FC = () => {
	return (
		<div
			className="relative container flex flex-col-reverse max-w-7xl mx-auto 
						mt-32  px-1 text-gray-900 md:flex-row md:gap-0 gap-14 "
		>
			<div
				className=" top-48 pr-0  md:right-0 md:py-20 md:px-20 drop-shadow-xl
							 opacity-60 md:bg-white  md:dark:bg-slate-600 rounded-xl"
			>
				<h2
					className=" mt-10 mb-6 font-Josefin text-4xl text-center text-gray-900
								md:text-5xl md:mt-0 md:text-left dark:text-white drop-shadow-xl uppercase"
				>
					purely handmade
				</h2>
				<p className="max-w-xl text-center  md:text-left dark:text-white md:pr-12">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Perspiciatis, possimus recusandae. Itaque voluptatem quibusdam
					voluptatum amet, repellendus harum, repellat tenetur illo odio iure
					veniam consequatur consectetur minima error! Sequi, consectetur.
				</p>
			</div>
		</div>
	);
};

export default About;
