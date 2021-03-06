import React from 'react';
import styles from './about-card.module.css';

interface AboutCardProps {
	icon: any;
	stats: number;
	title: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, stats }) => {
	return (
		<div className={styles.about__card}>
			<Icon className={styles.about__card__icon} />
			<h2 className={styles.about__card__stats}>{stats}</h2>
			<h4 className={styles.about__card__title}>{title}</h4>
		</div>
	);
};

export default AboutCard;
