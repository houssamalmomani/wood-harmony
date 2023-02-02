import Image, { StaticImageData } from 'next/image';

import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';

const CustomIt: React.FC<{}> = () => {
	const { locale } = useRouter();
	const { t } = useTranslation('home');
	const gallery: (string | StaticImageData)[][] = [
		['/imgH.jpg', 'col-span-3', 'i1'],
		['/hand5.jpg', 'col-span-2', 'i2'],
		['/hand1.jpg', 'col-span-3 col-start-1 row-end-1', 'i3'],
		['/hand2.jpg', 'row-end-2 col-start-3 col-span-4', 'i4'],
		['/img9.jpg', 'col-span-2', 'i5'],
		['/img1R.jpg', 'col-span-2 col-start1 row-start-1', 'i6'],
		['/img7.jpg', 'col-span-2', 'i7'],
		['/hand6.jpg', 'col-span-3', 'i8'],
		['/necklaces.jpg', 'col-span-1', 'i9'],
		['/img4.jpg', 'col-span-2', 'i10'],
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
						quality={70}
						width={500}
						height={500}
					/>
				</div>
			))}
		</>
	);

	return (
		<section className=" max-w-7xl mx-auto mt-40 mb-1 lg:mb-2 px-1  ">
			<div className="  flex justify-center mb-16 ">
				{' '}
				<h1
					className={`-tracking-tight text-3xl dark:text-white
				 text-center md:text-5xl font-Josefin  ${
						locale === 'ar' && 'max-w-sm md:max-w-lg'
					} `}
				>
					{t('Express yourself with customizables')}
				</h1>
			</div>
			<div className="  grid grid-rows-2 grid-cols-8 gap-1 lg:gap-2 shadow-2xl">
				{galleryHandler}
			</div>
		</section>
	);
};
export default CustomIt;
