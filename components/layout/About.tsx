import Image from 'next/image';
import about from '../../public/assets/mobile/img1.jpg';
const About: React.FC = (props) => {
	return (
		<div className="    relative container flex flex-col max-w-6xl mx-auto my-32  px-6 text-gray-900 md:flex-row md:px-0">
			{/* <div className='md:absolute bg-black opacity-60 bottom-0 top-0 w-full  '></div> */}
			<div className=" relative  ">
				<Image
					className="   rounded-t-xl md:rounded-none"
					src={about}
					alt=""
					width={700}
				/>
			</div>
			<div className=" top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20 opacity-60 rounded-b-xl md:rounded-none dark:bg-slate-600">
				<h2 className="max-w-lg mt-10 mb-6 font-Josefin text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left dark:text-white">
					it touch your soul
				</h2>
				<p className="max-w-md text-center md:text-left dark:text-white">
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
