import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './pagewrapper.module.css';
import { motion } from 'framer-motion';
import Head from 'next/head';

import MySwitch from '../../components/my-switch/MySwitch';

interface SEOInfo {
	description?: string;
	url?: string;
	image?: string;
}
interface PageWrapperProps {
	title: string;
	isLandingPage?: boolean;
	style?: React.CSSProperties | undefined;
	className?: string | undefined;
	metaTags?: React.FC;
	seoInfo?: SEOInfo;
}

const pageVariant = {
	visible:
		{
			opacity: 1,
			transition: { delay: 0.2, duration: 0.2 }
		},
	hidden:
		{
			opacity: 0
		},
	exit:
		{
			x: '-100vw',
			transition: { eaase: 'easeInOut', when: 'beforeChildren' }
		}
};

const PageWrapper: React.FC<PageWrapperProps> = ({
	children,
	title,
	isLandingPage = false,
	style = {},
	className,
	seoInfo: { description, image, url }
}) => {
	const [
		darkMode,
		setDarkMode
	] = useState<boolean>(true);

	const handleChangeTheme = (e: any) => {
		if (!darkMode) {
			document.documentElement.setAttribute('data-theme', 'dark');
			setDarkMode(true);
		}
		else {
			document.documentElement.setAttribute('data-theme', 'light');
			setDarkMode(false);
		}
	};
	return (
		<motion.div variants={pageVariant} initial="hidden" animate="visible" exit="exit">
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
				<meta name="og:title" content={title} />
				<meta name="og:type" content="article" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@publisher_handle" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:creator" content="@author_handle" />
				{description && (
					<React.Fragment>
						<meta name="description" content={description} />
						<meta name="og:description" content={description} />
						<meta name="twitter:description" content={description} />
					</React.Fragment>
				)}
				{image && (
					<React.Fragment>
						<meta name="image" content={image} />
						<meta name="twitter:image" content={image} />
						<meta name="og:image" content={image} />
					</React.Fragment>
				)}
				{url && (
					<React.Fragment>
						<link rel="canonical" href={url} />
						<meta name="og:url" content={url} />
					</React.Fragment>
				)}
			</Head>
			<Header />
			<div className={`${styles.content} ${className}`} style={{ ...style }}>
				<div className={styles.themeToggleContainer}>
					<MySwitch
						toggleSelected={handleChangeTheme}
						selected={darkMode}
						selectedString="Light"
						disabledString="Dark"
					/>
				</div>
				{!isLandingPage && (
					<div className={styles.page__title}>
						<h1>{title.split('-')[0]}</h1>
					</div>
				)}
				{children}
			</div>
			<Footer />
		</motion.div>
	);
};

export default PageWrapper;
