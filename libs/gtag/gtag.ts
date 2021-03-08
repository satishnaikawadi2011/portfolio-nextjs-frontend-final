import { GaEvent } from './types';
// G-GPGQ7M2B3D
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const trackPageView = (url: string): void => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url
	});
};

export const trackEvent = ({ action, category, label, value }: GaEvent): void => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};
