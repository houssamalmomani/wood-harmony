import Image, { StaticImageData } from 'next/image';
import about from '../../public/keyD3.jpg';
import ProductImagesSlider from '../ui/ProductImagesSlider';
import key from '../../public/img1R.jpg';
import key1 from '../../public/assets/desktop/img5.jpg';
import key2 from '../../public/assets/desktop/img2.jpg';
import key3 from '../../public/assets/desktop/img7.jpg';
const productImages: StaticImageData[] = [key, key1, key2, key3];
const About: React.FC = () => {
	return (
		<div
			className="relative container flex flex-col-reverse max-w-7xl mx-auto 
						my-32  px-1 text-gray-900 md:flex-row md:gap-0 gap-14 "
		>
			{/* <div className='md:absolute bg-black opacity-60 bottom-0 top-0 w-full  '></div> */}
			<div
				className="max-w-lg -rotate-12 max-md:max-w-[300px]
			 				max-[330px]:max-w-[200px] max-md:mx-auto "
			>
				<ProductImagesSlider
					images={productImages}
					autoplay={true}
					pagination={false}
					id={Math.random()}
				/>
			</div>
			<div
				className=" top-48 pr-0 md:absolute md:right-0 md:py-20 md:px-20
							 opacity-60 md:bg-white  md:dark:bg-slate-600"
			>
				<h2
					className=" mt-10 mb-6 font-Josefin text-4xl text-center text-gray-900
								md:text-5xl md:mt-0 md:text-left dark:text-white"
				>
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
