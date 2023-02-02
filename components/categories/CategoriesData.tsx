import { StaticImageData } from 'next/image';

const categoriesData: (string | StaticImageData)[][] = [
	[
		'Hand Bracelets',
		'/categories/handBracelets',
		'/handb2.jpg',
		'/fliped5.jpg',
	],
	['Necklaces', '/categories/necklaces', '/necklaces.jpg', '/fliped2.jpg'],
	['Key Chains', '/categories/keychains', '/keyD1.jpg', '/keyM.jpg'],
];

export default categoriesData;
