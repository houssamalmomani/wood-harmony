import Image from 'next/image';
import Link from 'next/link';
import SeeMore from '../ui/SeeMore';
import CardCat from '../ui/CardCat';
import categoriesData from './CategoriesData';

const Categories: React.FC = () => {
	const categoryData = (
		<>
			<CardCat>
				{categoriesData.map(([title, url, image, imageM]) => (
					<div
						key={`${title}`}
						className="group overflow-hidden md:w-1/3 shadow-2xl relative rounded-lg md:rounded-none"
					>
						<Link
							href={`${url}`}
							className="hover:text-gray-400 flex "
						>
							<Image
								className="hidden duration-200 md:block group-hover:scale-110 "
								src={image}
								alt=""
								width={500}
							/>
							<Image
								className="  md:hidden group-hover:scale-110 duration-200 rounded-lg"
								src={imageM}
								alt=""
							/>
							<div
								className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b 
		                    from-transparent to-black group-hover:from-gray-50 group-hover:to-white 
							group-hover:opacity-70 rounded-lg md:rounded-none group-hover:animate-pulse"
							/>
							<SeeMore />
							<h5>{`${title}`}</h5>
						</Link>
					</div>
				))}
			</CardCat>
		</>
	);

	return (
		<div className=" max-w-7xl mx-auto my-32 text-gray-900 px-1 xl:px-0 overflow-hidden">
			<div className="flex justify-center mb-12 ">
				<h2 className="text-3xl dark:text-white text-center  md:text-left md:text-4xl font-Josefin -tracking-tight">
					Our Products
				</h2>
			</div>
			{categoryData}
		</div>
	);
};
export default Categories;
