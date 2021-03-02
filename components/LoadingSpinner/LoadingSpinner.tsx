import React from 'react';
import styles from './loading-spinner.module.css';

const LoadingSpinner = () => {
	return (
		<div className={styles.loader__container}>
			<div className={styles.loader}>Loading...</div>
		</div>
	);
};

export default LoadingSpinner;
