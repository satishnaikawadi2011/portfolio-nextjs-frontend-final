import React, { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './pagewrapper.module.css';
import { motion } from 'framer-motion';
import Head from 'next/head';

import MySwitch from '../../components/my-switch/MySwitch';

interface PageWrapperProps {
	title: string;
	isLandingPage?: boolean;
	style?: React.CSSProperties | undefined;
	className?: string | undefined;
	metaTags?: React.FC;
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
	metaTags: MetaTags
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
				{MetaTags && <MetaTags />}
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
