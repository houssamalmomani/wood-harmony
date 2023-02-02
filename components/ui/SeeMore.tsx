import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const SeeMore: React.FC = (props) => {
	const { locale } = useRouter();
	const { t } = useTranslation('common');
	return (
		<>
			<p
				className={` md:hidden block absolute px-6 duration-200 
										text-xs md:text-sm bottom-4 right-0 md:bottom-8 
										md:px-10 group-hover:scale-110 group-hover:text-black ${
											locale === 'ar' && 'left-0'
										} `}
			>
				{t('Tap to see more')}
			</p>
			<p
				className={` hidden md:block absolute px-6 duration-200
										 text-xs md:text-sm bottom-4 right-0 md:bottom-8 
										md:px-10 group-hover:scale-110 group-hover:text-black ${
											locale === 'ar' && 'left-0'
										} `}
			>
				{t('Click')}
			</p>
		</>
	);
};

export default SeeMore;
