import Image from 'next/image';
import about from '../../public/keyD3.jpg';
const About: React.FC = (props) => {
	return (
		<div className="    relative container flex flex-col-reverse max-w-7xl mx-auto  my-32  px-1 text-gray-900 md:flex-row md:gap-0 gap-10 ">
			{/* <div className='md:absolute bg-black opacity-60 bottom-0 top-0 w-full  '></div> */}
			<div className=" relative">
				<Image
					className="    "
					src={about}
					alt=""
					width={600}
				/>
			</div>
			<div className=" top-48 pr-0  md:absolute md:right-0  md:py-20 md:px-20 opacity-60 md:bg-white  md:dark:bg-slate-600">
				<h2 className=" mt-10 mb-6 font-Josefin text-4xl text-center text-gray-900  md:text-5xl md:mt-0 md:text-left dark:text-white">
					It touch your soul
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
