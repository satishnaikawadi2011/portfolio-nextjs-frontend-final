import React from 'react';
import styles from './education-item.module.css';
import Rosa from 'react-on-scroll-animation';

interface EducationItemProps {
	timePeriod: string;
	title: string;
	subtitle: string;
	info: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ timePeriod, title, subtitle, info }) => {
	return (
		<Rosa animation="fade-left" duration={300}>
			<div className={styles.education__item}>
				<p className={styles.timeline}>{timePeriod}</p>
				<div className={styles.timeline__text}>
					<h2 className={styles.timeline__title}>{title}</h2>
					<p className={styles.timeline__info}>
						<div>{subtitle}</div>
						{info}
					</p>
				</div>
			</div>
		</Rosa>
	);
};

export default EducationItem;
