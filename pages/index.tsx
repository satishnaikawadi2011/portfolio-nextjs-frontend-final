import Head from 'next/head';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';

export default function Home() {
	return (
		<div>
			<Header />
			<h1>Home Page</h1>;s
			<Footer />
		</div>
	);
}
