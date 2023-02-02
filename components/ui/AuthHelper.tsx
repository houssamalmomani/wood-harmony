import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

const AuthHelper: React.FC<any> = (props) => {
	const { status } = useSession();
	const { t } = useTranslation('common');
	return (
		<>
			{status === 'authenticated' ? (
				<>
					<Link
						onClick={() => props.navState((prevState: boolean) => !prevState)}
						href={'/admin/orders'}
						className="hover:text-gray-400 md:hover:text-white
            md:hover:border-b-2 border-white"
					>
						{t('Orders')}
					</Link>
					<Link
						onClick={() => props.navState((prevState: boolean) => !prevState)}
						href={'/admin/addItems'}
						className="hover:text-gray-400 md:hover:text-white
            md:hover:border-b-2 border-white"
					>
						{t('Add Items')}
					</Link>
					<Image
						className="svg-gray"
						src={'/logout.svg'}
						alt="logout icon"
						onClick={() => signOut({ callbackUrl: '/' })}
						role="button"
						width={20}
						height={20}
					/>
				</>
			) : (
				<>
					<Image
						className="svg-gray"
						src={'/login.svg'}
						alt="login icon"
						onClick={props.val}
						role="button"
						width={20}
						height={20}
					/>
				</>
			)}
		</>
	);
};
export default AuthHelper;
