import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyDocument(props) {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Alata&family=DM+Sans:wght@500&family=Inter:wght@400;500;700&family=Josefin+Sans:wght@300&family=Lobster&family=Orbitron:wght@800&family=Righteous&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default MyDocument;
