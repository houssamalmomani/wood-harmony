import Image from 'next/image';
import hand from '../../public/assets/mobile/hand2.jpg';
import img1 from '../../public/assets/mobile/img1R.jpg';
import hand1 from '../../public/assets/mobile/hand1.jpg';
import img3 from '../../public/assets/mobile/img3.jpg';
import img5 from '../../public/assets/mobile/img9.jpg';
import img7 from '../../public/assets/mobile/img7.jpg';
import hand5 from '../../public/assets/mobile/hand5.jpg';
import hand6 from '../../public/assets/mobile/hand6.jpg';
import img6 from '../../public/assets/desktop/img6.jpg';
import img4 from '../../public/assets/desktop/img4.jpg';

const CustomIt: React.FC = () => {
	return (
		<section className=" max-w-6xl mx-auto mt-52 mb-1 lg:mb-2 px-1  ">
			<div className="  flex justify-center mb-12 md:justify-between">
				{' '}
				<h1 className="text-2xl dark:text-white text-center uppercase md:text-left md:text-4xl font-Josefin">
					Express yourself with customizables
				</h1>
			</div>
			<div className="  grid grid-rows-2 grid-cols-8 gap-1 lg:gap-2 shadow-2xl">
				<div className="  col-span-3   ">
					<Image
						className="gallery "
						src={img3}
						alt=""
					/>
				</div>
				<div className=" col-span-2">
					<Image
						className="gallery"
						src={hand5}
						alt=""
					/>
				</div>
				<div className=" col-span-3 col-start-1 row-end-1 ">
					<Image
						className="gallery"
						src={hand1}
						alt=""
					/>
				</div>
				<div className=" row-end-2 col-start-3 col-span-4">
					<Image
						className="gallery	"
						src={hand}
						alt=""
					/>
				</div>

				<div className=" col-span-2 ">
					<Image
						className="gallery"
						src={img5}
						alt=""
					/>
				</div>
				<div className=" col-span-2 col-start1 row-start-1 ">
					<Image
						className="gallery"
						src={img1}
						alt=""
					/>
				</div>
				<div className=" col-span-2 ">
					<Image
						className="gallery"
						src={img7}
						alt=""
					/>
				</div>
				<div className=" col-span-3 ">
					<Image
						className="gallery"
						src={hand6}
						alt=""
					/>
				</div>
				<div className=" col-span-1  ">
					<Image
						className="gallery"
						src={img6}
						alt=""
					/>
				</div>
				<div className=" col-span-2  ">
					<Image
						className="gallery"
						src={img4}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};
export default CustomIt;
