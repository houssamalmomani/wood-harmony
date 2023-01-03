import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useTheme } from 'next-themes';

const DarkModeBtn: React.FC = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, [theme]);
	const themeChangerHandler = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<Image
					className=" svg"
					src="/sunny-outline.svg"
					alt=""
					width={25}
					height={25}
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<Image
					className=" svg"
					src="/moon.svg"
					alt=""
					width={22}
					height={22}
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return <div className="animate-bounce">{themeChangerHandler()}</div>;
};

export default DarkModeBtn;
