import React, { useRef, useState } from 'react';
import EducationItem from '../../education-item/EducationItem';
import styles from './education.module.css';

const EducationSection = ({ educationItems, experienceItems }) => {
	const [
		showEduSec,
		setShowEduSec
	] = useState<boolean>(true);
	const edu = useRef<HTMLButtonElement | null>(null);
	const exp = useRef<HTMLButtonElement | null>(null);
	const expEduSec = useRef<HTMLDivElement | null>(null);
	const expHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setShowEduSec(false);
		edu.current!.classList.remove(`${styles['btn--white']}`);
		exp.current!.classList.add(`${styles['btn--white']}`);
		expEduSec.current!.classList.add(styles.remove__line);
	};

	const eduHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setShowEduSec(true);
		edu.current!.classList.add(`${styles['btn--white']}`);
		exp.current!.classList.remove(`${styles['btn--white']}`);
		expEduSec.current!.classList.remove(styles.remove__line);
	};
	return (
		<section className={`section education`}>
			<div className={`section__title`}>
				<h1>education and experience</h1>
			</div>
			<div ref={expEduSec} id="expEduSec" className={styles.edu__exp__sec}>
				<div className={styles.buttons}>
					<button ref={exp} id="exp" onClick={expHandler} className={styles.btn}>
						my experience
					</button>
					<button ref={edu} id="edu" onClick={eduHandler} className={`${styles.btn} ${styles['btn--white']}`}>
						my education
					</button>
				</div>
				{
					showEduSec ? <div id="edu__sec" className={styles.education__section}>
						{educationItems.map((edu) => {
							return (
								<EducationItem
									key={edu.id}
									info={edu.description}
									subtitle={edu.education_completed_there}
									timePeriod={edu.timePeriod}
									title={edu.schoolName}
								/>
							);
						})}
					</div> :
					<div id="exp__sec" className={styles.experience__section}>
						<h4>still taking my degree courses , no experirnce of industrial work!!!</h4>
					</div>}
			</div>
		</section>
	);
};

export default EducationSection;
