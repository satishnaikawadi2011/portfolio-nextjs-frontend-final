declare global {
	interface Window {
		gtag: any;
	}
}

export interface GaEvent {
	action: string;
	category?: string;
	label?: string;
	value?: string;
}
