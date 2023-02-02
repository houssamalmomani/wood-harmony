import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const About: React.FC = () => {
	const { locale } = useRouter();
	const { t } = useTranslation('home');
	return (
		<div className=" max-w-6xl mx-auto mt-40 md:mt-52">
			<div
				className={`md:right-0 md:py-20 md:px-20 drop-shadow-xl
				opacity-60 md:bg-white  md:dark:bg-slate-600 rounded-xl text-center md:text-left 
							 ${locale === 'ar' && 'md:text-right'}`}
			>
				<h2
					className="  mb-10 font-Josefin text-3xl  text-gray-900
								md:text-5xl md:mt-0  dark:text-white drop-shadow-xl capitalize "
				>
					{t('handcrafted with passion')}
				</h2>
				<p className="dark:text-white font-Josefin text-lg md:text-xl ">
					{t(
						'we made our product with natural woods depends on the mood , obviously that is what makes our product so special, every item is a unique item, hence you can only choose one item for each !'
					)}
				</p>
			</div>
		</div>
	);
};

export default About;
