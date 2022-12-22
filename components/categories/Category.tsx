import Card from '../ui/Card';
import blueM from '../../public/assets/mobile/img1.jpg';
import blue from '../../public/assets/img1.jpg';
import neckM from '../../public/assets/mobile/img8.jpg';
import neck from '../../public/assets/desktop/img6.jpg';
import key from '../../public/assets/desktop/img2.jpg';
import keyM from '../../public/assets/mobile/img4M.jpg';
import Image from 'next/image';
import { ProviderProps } from '../models/InterFaces';
import Link from 'next/link';

const Category: React.FC<ProviderProps> = (props) => {
	return (
		<div className=" max-w-6xl mx-auto my-52 text-gray-900 px-1 xl:px-0 overflow-hidden">
			<div className="flex justify-center mb-12 sm:justify-between ">
				<h2 className="text-2xl dark:text-white text-center uppercase md:text-left md:text-4xl font-Josefin">
					Our Products
				</h2>
			</div>
			<div className="items-container font-Josefin ">
				<div className="group category shadow-2xl relative ">
					<Link href="/categories/handBracelets">
						<Image
							className="hidden duration-200 sm:block group-hover:scale-110 "
							src={blue}
							alt=""
							width={500}
						/>
						<Image
							className=" sm:hidden group-hover:scale-110 duration-200"
							src={blueM}
							alt=""
							width={530}
						/>

						<div className="category-gradient " />
						<h5>Hand Bracelets</h5>
					</Link>
				</div>

				<div className=" group category shadow-2xl relative ">
					<Link href="/categories/necklaces">
						<Image
							className=" hidden duration-200 sm:block group-hover:scale-110"
							src={neck}
							alt=""
						/>
						<Image
							className="  sm:hidden group-hover:scale-110 duration-200"
							src={neckM}
							alt=""
							width={530}
						/>

						<div className="category-gradient "></div>
						<h5>Necklaces</h5>
					</Link>
				</div>

				<div className="group category  shadow-2xl relative">
					<Link href="/categories/keychains">
						<Image
							className=" hidden shadow-2xl duration-200 sm:block group-hover:scale-110"
							src={key}
							alt=""
						/>
						<Image
							className="sm:hidden group-hover:scale-110 duration-200"
							src={keyM}
							alt=""
							width={530}
						/>

						<div className="category-gradient ">
							<h5>Key chains</h5>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Category;
