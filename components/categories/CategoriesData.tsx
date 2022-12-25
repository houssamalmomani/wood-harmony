import hand from '../../public/handb2.jpg';
import handM from '../../public/fliped5.jpg';
import neckM from '../../public/fliped2.jpg';
import neck from '../../public/necklaces.jpg';
import key from '../../public/keyD1.jpg';
import keyM from '../../public/keym.jpg';
import { StaticImageData } from 'next/image';

const categoriesData: (string | StaticImageData)[][] = [
	['Hand Bracelets', '/categories/handBracelets', hand, handM],
	['Necklaces', '/categories/necklaces', neck, neckM],
	['Key Chains', '/categories/keychains', key, keyM],
];

export default categoriesData;
