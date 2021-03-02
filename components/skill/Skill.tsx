import React from 'react';
import styles from './skill.module.css';

interface SkillProps {
	name: string;
	percent: number;
}

const Skill: React.FC<SkillProps> = ({ name, percent }) => {
	return (
		<div className={styles.skill}>
			<h4 className={styles.skill__title}>{`${name} ${percent}%`}</h4>
			<div className={styles.skill__progress__bar}>
				<div className={styles.skill__progress__bar__completed} style={{ width: `${percent}%` }} />
			</div>
		</div>
	);
};

export default Skill;
