import Head from 'next/head';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import PageWrapper from '../layout/pagewrapper/PageWrapper';

export default function Home() {
	return (
		<PageWrapper isLandingPage title="Satish Naikawadi | Developer">
			<h1>Home Page</h1>
		</PageWrapper>
	);
}
