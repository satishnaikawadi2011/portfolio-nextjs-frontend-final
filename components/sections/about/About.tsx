import React from 'react';
import AboutCard from '../../about-card/AboutCard';
import Skill from '../../skill/Skill';
import styles from './about.module.css';
import { ImFilesEmpty } from 'react-icons/im';
import { RiArticleLine } from 'react-icons/ri';
import { GrTechnology } from '../../../icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInLeftVariant, fadeInRightVariant } from '../../../animations/ScrollAnimations';

interface AboutProps {
	title?: boolean;
	postCount: number;
}

const About: React.FC<AboutProps> = ({ title, postCount }) => {
	const [
		ref,
		inView
	] = useInView({ triggerOnce: true });
	return (
		<section className={`${styles.about} section`}>
			{title && (
				<div className="section__title">
					<h1>about myself</h1>
				</div>
			)}
			<div className="section__center">
				<motion.div
					variants={fadeInRightVariant}
					ref={ref}
					initial="closed"
					animate={

							inView ? 'open' :
							'closed'
					}
					className={styles.left__half}
				>
					<p className={styles.about__text}>
						I love to learn and explore new frameworks and technologies coming in dev community. I also
						daily read dev articles. I learn things by making small projects to get comfortable with that
						particular technology.
					</p>

					<div className={styles.about__cards}>
						<AboutCard icon={ImFilesEmpty} stats={12} title="total projects" />
						<AboutCard icon={RiArticleLine} stats={postCount} title="total articles" />
						<AboutCard icon={GrTechnology} stats={25} title="total technologies" />
					</div>
				</motion.div>
				<motion.div
					ref={ref}
					initial="closed"
					variants={fadeInLeftVariant}
					animate={

							inView ? 'open' :
							'closed'
					}
					className={`${styles.skills} ${styles.right__half}`}
				>
					<Skill name="javascript" percent={80} />
					<Skill name="react JS" percent={90} />
					<Skill name="flutter" percent={75} />
					<Skill name="docker" percent={55} />
					<Skill name="node JS" percent={85} />
				</motion.div>
			</div>
		</section>
	);
};

export default About;
