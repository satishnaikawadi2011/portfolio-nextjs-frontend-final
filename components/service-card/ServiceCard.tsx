import React from 'react';
import styles from './service-card.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeInRightVariant } from '../../animations/ScrollAnimations';

interface ServiceCardProps {
	icon: string;
	title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => {
	const [
		ref,
		inView
	] = useInView({ triggerOnce: true });
	return (
		<motion.div
			ref={ref}
			className={styles.service}
			variants={fadeInRightVariant}
			initial="closed"
			animate={

					inView ? 'open' :
					'closed'
			}
		>
			<svg className={styles.service__icon}>
				<use href={`images/sprite.svg#${icon}`} />
			</svg>
			<div className={styles.service__title}>
				<h2>{title}</h2>
			</div>
			<div className={styles.service__info}>
				<p>{children}</p>
			</div>
		</motion.div>
	);
};

export default ServiceCard;
