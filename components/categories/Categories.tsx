import Image from 'next/image';
import Link from 'next/link';
import SeeMore from '../ui/SeeMore';
import CardCat from '../ui/CardCat';
import categoriesData from './CategoriesData';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Categories: React.FC = () => {
	const [loading, setIsLoading] = useState(false);
	const { locale } = useRouter();
	const { t } = useTranslation('common');
	const categoryData = (
		<>
			<CardCat>
				{categoriesData.map(([title, url, image, imageM]: any) => (
					<div
						key={`${title}`}
						className="group overflow-hidden md:w-1/3 drop-shadow-lg shadow-sm
									relative rounded-lg md:rounded-none"
					>
						<Link
							href={`${url}`}
							onClick={() => setIsLoading((prevState) => !prevState)}
							className={`hover:text-gray-400 flex  ${
								locale === 'ar' && ' '
							}  `}
						>
							<Image
								className="hidden duration-200 md:block group-hover:scale-110 "
								src={image}
								alt=""
								quality={70}
								width={500}
								height={500}
							/>
							<Image
								className="  md:hidden group-hover:scale-110 duration-200 rounded-lg "
								src={imageM}
								alt=""
								quality={70}
								width={500}
								height={500}
							/>
							{loading ? (
								<div
									className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b 
									from-transparent  group-hover:from-gray-50 group-hover:to-white 
									group-hover:opacity-70 rounded-lg md:rounded-none group-hover:animate-pulse"
								></div>
							) : (
								<div
									className="absolute top-0 bottom-0 right-0 left-0 opacity-90
									bg-gradient-to-b from-transparent to-black"
								></div>
							)}
							<SeeMore />
							<h5 className={`${locale === 'ar' && 'right-0 text-right'}`}>
								{`${t(title)}`}
							</h5>
						</Link>
					</div>
				))}
			</CardCat>
		</>
	);

	return (
		<div
			className=" max-w-7xl mx-auto my-40 text-gray-900 
		px-1 xl:px-0 overflow-hidden max-md:my-24 md:my-80"
		>
			<div className="flex justify-center mb-16 ">
				<h2
					className="text-3xl dark:text-white text-center 
				 md:text-left md:text-5xl font-Josefin -tracking-tight"
				>
					{t('Our Products')}
				</h2>
			</div>
			{categoryData}
		</div>
	);
};
export default Categories;
