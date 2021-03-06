import React from 'react';
import styles from './service-card.module.css';
// import Rosa from 'react-on-scroll-animation';

interface ServiceCardProps {
	icon: string;
	title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => {
	return (
		<div className={styles.service}>
			{/* <Rosa animation="slide-up" duration={100}> */}
			<svg className={styles.service__icon}>
				<use href={`images/sprite.svg#${icon}`} />
			</svg>
			<div className={styles.service__title}>
				<h2>{title}</h2>
			</div>
			<div className={styles.service__info}>
				<p>{children}</p>
			</div>
			{/* </Rosa> */}
		</div>
	);
};

export default ServiceCard;
