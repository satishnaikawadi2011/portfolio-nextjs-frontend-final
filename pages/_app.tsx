import '../styles/normalize.css';
import '../styles/globals.css';
import React from 'react';
import { AppProps /*, AppContext */ } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { trackPageView } from '../libs/gtag/gtag';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(
		() => {
			const handleRouteChange = (url) => {
				trackPageView(url);
			};
			router.events.on('routeChangeComplete', handleRouteChange);
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		},
		[
			router.events
		]
	);
	return (
		<React.Fragment>
			<AnimatePresence exitBeforeEnter>
				<Component key={router.asPath} {...pageProps} />;
			</AnimatePresence>
		</React.Fragment>
	);
}

export default MyApp;
