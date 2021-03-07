import React from 'react';
import styles from './education-item.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { zoomInVariant } from '../../animations/ScrollAnimations';

interface EducationItemProps {
	timePeriod: string;
	title: string;
	subtitle: string;
	info: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ timePeriod, title, subtitle, info }) => {
	const [
		ref,
		inView
	] = useInView({ triggerOnce: true });
	return (
		<div className={styles.education__item}>
			<motion.p
				ref={ref}
				variants={zoomInVariant}
				initial="closed"
				animate={

						inView ? 'open' :
						'closed'
				}
				className={styles.timeline}
			>
				{timePeriod}
			</motion.p>
			<motion.div
				ref={ref}
				className={styles.timeline__text}
				variants={zoomInVariant}
				initial="closed"
				animate={

						inView ? 'open' :
						'closed'
				}
			>
				<h2 className={styles.timeline__title}>{title}</h2>
				<p className={styles.timeline__info}>
					<span className={styles.subtitle}>{subtitle}</span>
					{info}
				</p>
			</motion.div>
		</div>
	);
};

export default EducationItem;
