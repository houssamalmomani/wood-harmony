import { StaticImageData } from 'next/image';
import Btn from '../ui/Btn';
// import key from '../../public/product1/handblue0.jpg';
// import key1 from '../../public/product1/handblue1.jpg';
// import key2 from '../../public/product1/handblue2.jpg';
// import key3 from '../../public/product1/handblue3.jpg';
// import key4 from '../../public/product1/handblue4.jpg';

import ProductImagesSlider from '../ui/ProductImagesSlider';

const ProductDetails: React.FC<any> = (props) => {
	return (
		<div className="w-auto ">
			<div className=" flex flex-col gap-10 items-center justify-center mb-10 mt-32 max-w-xl mx-auto ">
				<h1 className=" font-Orbitron md:text-3xl text-xl">
					wood hand bracelets
				</h1>
				<div className=" w-full p-5">
					<ProductImagesSlider
						images={props.images}
						autoplay={false}
						pagination={true}
						id={Math.random()}
					/>
				</div>

				<Btn title="add to cart" />
			</div>
		</div>
	);
};
export default ProductDetails;
