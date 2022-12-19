import Card from '../ui/Card';
import hand from '../../public/assets/img1.jpg';
import neck from '../../public/assets/desktop/img6.jpg';
import key from '../../public/assets/desktop/img2.jpg';

import Image from 'next/image';
import { ProviderProps } from '../models/InterFaces';
import Link from 'next/link';

const Category: React.FC<ProviderProps> = (props) => {
	return (
		<div className="container max-w-6xl mx-auto my-32  px-6 text-gray-900 md:px-0 ">
			<div className="flex justify-center mb-20 md:justify-between ">
				<h2 className="text-4xl dark:text-white text-center uppercase md:text-left md:text-5xl font-Josefin">
					Our Products
				</h2>
			</div>
			<div className="items-container font-Josefin text-3xl">
				<div className="group category rounded-xl md:rounded-none shadow-2xl relative">
					<Link href="/products">
						<Image
							className="  w-full duration-200 md:block group-hover:scale-110 rounded-xl md:rounded-none"
							src={hand}
							alt=""
							width={500}
						/>
					</Link>

					<div className="category-gradient rounded-xl md:rounded-none"></div>
					<h5>hand Bracelets</h5>
				</div>

				<div className="group category rounded-xl md:rounded-none shadow-2xl">
					<Link href="/products">
						<Image
							className="  w-full  duration-200 md:block group-hover:scale-110"
							src={neck}
							alt=""
							width={500}
						/>
					</Link>

					<div className="category-gradient rounded-xl md:rounded-none "></div>
					<h5>necklaces</h5>
				</div>

				<div className="group category rounded-xl md:rounded-none shadow-2xl">
					<Link href="/products">
						<Image
							className="  shadow-2xl  w-full duration-200 md:block group-hover:scale-110"
							src={key}
							alt=""
						/>
					</Link>

					<div className="category-gradient md:rounded-none rounded-xl">
						<h5>Keychains</h5>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Category;
