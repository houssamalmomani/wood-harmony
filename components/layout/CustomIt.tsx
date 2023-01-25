import Image, { StaticImageData } from 'next/image';
import hand from '../../public/assets/mobile/hand2.jpg';
import img1 from '../../public/assets/mobile/img1R.jpg';
import hand1 from '../../public/assets/mobile/hand1.jpg';
import img3 from '../../public/assets/mobile/img3.jpg';
import img5 from '../../public/assets/mobile/img9.jpg';
import img7 from '../../public/assets/mobile/img7.jpg';
import hand5 from '../../public/assets/mobile/hand5.jpg';
import hand6 from '../../public/assets/mobile/hand6.jpg';
import img6 from '../../public/necklaces.jpg';
import img4 from '../../public/assets/desktop/img4.jpg';
import { ReactElement } from 'react';

const CustomIt: React.FC<{}> = () => {
	const gallery: (string | StaticImageData)[][] = [
		[img3, 'col-span-3', 'i1'],
		[hand5, 'col-span-2', 'i2'],
		[hand1, 'col-span-3 col-start-1 row-end-1', 'i3'],
		[hand, 'row-end-2 col-start-3 col-span-4', 'i4'],
		[img5, 'col-span-2', 'i5'],
		[img1, 'col-span-2 col-start1 row-start-1', 'i6'],
		[img7, 'col-span-2', 'i7'],
		[hand6, 'col-span-3', 'i8'],
		[img6, 'col-span-1', 'i9'],
		[img4, 'col-span-2', 'i10'],
	];

	const galleryHandler: ReactElement<any, any> = (
		<>
			{gallery.map(([image, space, id]) => (
				<div
					className={`${space}`}
					key={`${id}`}
				>
					<Image
						className="w-full h-full object-cover "
						src={image}
						alt=""
						quality={10}
						placeholder="blur"
					/>
				</div>
			))}
		</>
	);

	return (
		<section className=" max-w-7xl mx-auto mt-40 mb-1 lg:mb-2 px-1  ">
			<div className="  flex justify-center mb-12 ">
				{' '}
				<h1 className="-tracking-tight text-3xl dark:text-white text-center  md:text-left md:text-5xl font-Josefin">
					Express yourself with customizables
				</h1>
			</div>
			<div className="  grid grid-rows-2 grid-cols-8 gap-1 lg:gap-2 shadow-2xl">
				{galleryHandler}
			</div>
		</section>
	);
};
export default CustomIt;
