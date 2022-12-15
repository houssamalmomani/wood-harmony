/** @type {import('tailwindcss').Config} */
module.exports = {
	// darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	// extend: {
	// 	// screens: {
	// 	// 	'2xl': { max: '1535px' },
	// 	// 	// => @media (max-width: 1535px) { ... }
	// 	// 	xl: { max: '1279px' },
	// 	// 	// => @media (max-width: 1279px) { ... }
	// 	// 	lg: { max: '1023px' },
	// 	// 	// => @media (max-width: 1023px) { ... }
	// 	// 	md: { max: '767px' },
	// 	// 	// => @media (max-width: 767px) { ... }
	// 	// 	sm: { max: '639px' },
	// 	// 	// => @media (max-width: 639px) { ... }
	// 	// },
	// },
	theme: {
		fontFamily: {
			Orbitron: ['Orbitron'],
			Alata: ['Alata'],
			Josefin: ['Josefin Sans'],
			DmSans: ['DM Sans'],
			Inter: ['Inter'],

			Righteous: ['Righteous'],
		},
		letterSpacing: {
			widest: '.3em',
		},
	},
	plugins: [],
};
