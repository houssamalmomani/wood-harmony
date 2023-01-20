import About from '../components/layout/About';
import Categories from '../components/categories/Categories';
import Head from 'next/head';
import CustomIt from '../components/layout/CustomIt';
import Hero from '../components/layout/Hero';
import { useState } from 'react';
import AddItemDb from '../components/admin/AddItemDb';

export default function Home() {
	const [isLogIn, setIsLogIn] = useState(true);
	return (
		<>
			<Head>
				<title>Wood Harmony</title>
				<meta
					name="description"
					content=""
				/>
			</Head>
			{!isLogIn && (
				<>
					<Hero /> <Categories /> <CustomIt />
				</>
			)}

			{isLogIn && <AddItemDb />}
		</>
	);
}
