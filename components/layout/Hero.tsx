import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Hero: React.FC = () => {
	const { locale } = useRouter();
	const { t } = useTranslation('home');
	return (
		<header className="drop-shadow-lg relative  ">
			<Image
				className="object-cover"
				src={'/img3.jpg'}
				fill
				alt="main pic"
				priority
			/>

			<div
				className=" absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b 
				from-transparent to-black opacity-70 dark:opacity-100 "
			/>
			<div
				className={`z-10 container max-w-7xl mx-auto px-3 xl:px-0 py-28 
				${locale === 'ar' && 'text-right flex justify-end'} `}
			>
				<div
					className="header-text w-full  opacity-40 
					uppercase move-in-left  duration-300"
				>
					{t('handcrafted with passion')}
				</div>
			</div>
		</header>
	);
};
export default Hero;
