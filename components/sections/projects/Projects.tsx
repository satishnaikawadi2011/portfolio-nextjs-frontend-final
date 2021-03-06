import React from 'react';
import Link from 'next/link';
import ProjectItem from '../../project-item/ProjectItem';
import styles from './projects.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { zoomInVariant } from '../../../animations/ScrollAnimations';

const Projects = ({ projects }) => {
	const [
		ref,
		inView
	] = useInView({ triggerOnce: true });
	return (
		<section className="projects section">
			<div className="section__title">
				<h1>my projects</h1>
				<p>
					These are some projects I have build while learning new teachnology or to get deep knowledge about
					some parts of any technology.
				</p>
			</div>
			<motion.div
				ref={ref}
				variants={zoomInVariant}
				initial="closed"
				animate={

						inView ? 'open' :
						'closed'
				}
				className={`section__center ${styles.projects__section}`}
			>
				{projects.map((project) => {
					return <ProjectItem project={project} key={project.id} />;
				})}
			</motion.div>
			<div className={styles.btn__container}>
				<Link href="/projects">
					<a className="mainBtn" type="button">
						more projects
					</a>
				</Link>
			</div>
		</section>
	);
};

export default Projects;
