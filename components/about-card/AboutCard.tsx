import React from 'react';
import styles from './about-card.module.css';

interface AboutCardProps {
	icon: string;
	stats: number;
	title: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, stats }) => {
	return (
		<div className={styles.about__card}>
			<svg className={styles.about__card__icon}>
				<use href={`images/sprite.svg#${icon}`} />
			</svg>
			<h2 className={styles.about__card__stats}>{stats}</h2>
			<h4 className={styles.about__card__title}>{title}</h4>
		</div>
	);
};

export default AboutCard;
