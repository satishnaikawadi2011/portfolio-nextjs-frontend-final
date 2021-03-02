import React, { useEffect, useState } from 'react';
import styles from './snackbar.module.css';

interface SnackbarProps {
	message: string;
	open: boolean;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, open }) => {
	const [
		isActive,
		setIsActive
	] = useState(false);
	useEffect(
		() => {
			if (open) {
				setIsActive(true);
				setTimeout(() => {
					setIsActive(false);
				}, 3000);
			}
		},
		[
			open
		]
	);
	return (
		<div
			className={

					isActive ? [
						styles.snackbar,
						styles.show
					].join(' ') :
					styles.snackbar
			}
		>
			{message}
		</div>
	);
};

export default Snackbar;
