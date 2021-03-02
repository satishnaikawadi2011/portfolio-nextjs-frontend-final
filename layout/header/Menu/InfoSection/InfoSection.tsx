import React from 'react';
import styles from './InfoSection.module.css';
import Socialicons from '../../../../components/social-icons/SocialIcons';
import Logo from '../../../../components/logo/Logo';

const InfoSection = () => {
	return (
		<div className={styles.hero__section}>
			<div>
				<Logo className={styles.logo} />
			</div>
			<div className={styles.name}>
				<h1>Satish Naikawadi</h1>
			</div>
			<div className={styles.social__icons}>
				<Socialicons color="white" />
			</div>
		</div>
	);
};

export default InfoSection;
