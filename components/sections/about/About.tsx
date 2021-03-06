import React from 'react';
import AboutCard from '../../about-card/AboutCard';
import Skill from '../../skill/Skill';
import styles from './about.module.css';
// import Rosa from 'react-on-scroll-animation';
import { ImFilesEmpty } from 'react-icons/im';
import { RiArticleLine } from 'react-icons/ri';
import { GrTechnology } from '../../../icons';

interface AboutProps {
	title?: boolean;
}

const About: React.FC<AboutProps> = ({ title }) => {
	return (
		<section className={`${styles.about} section`}>
			{title && (
				<div className="section__title">
					<h1>about myself</h1>
				</div>
			)}
			<div className="section__center">
				<div className={styles.left__half}>
					{/* <Rosa duration={100} animation="fade-right"> */}
					<p className={styles.about__text}>
						I love to learn and explore new frameworks and technologies coming in dev community. I also
						daily read dev articles. I learn things by making small projects to get comfortable with that
						particular technology.
					</p>

					<div className={styles.about__cards}>
						<AboutCard icon={ImFilesEmpty} stats={12} title="total projects" />
						<AboutCard icon={RiArticleLine} stats={3} title="total articles" />
						<AboutCard icon={GrTechnology} stats={25} title="total technologies" />
					</div>
					{/* </Rosa> */}
				</div>
				<div className={`${styles.skills} ${styles.right__half}`}>
					{/* <Rosa animation="zoom-in-up" duration={100}> */}
					<Skill name="javascript" percent={80} />
					<Skill name="react JS" percent={90} />
					<Skill name="flutter" percent={75} />
					<Skill name="docker" percent={55} />
					<Skill name="node JS" percent={85} />
					{/* </Rosa> */}
				</div>
			</div>
		</section>
	);
};

export default About;
