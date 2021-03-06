import React from 'react';
import styles from './project-item.module.css';
import { motion } from 'framer-motion';
import { cardVariant } from '../../utils/variants';
// import Rosa from 'react-on-scroll-animation';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { Project } from '../../models/Project';
import Tag from '../tag/Tag';

interface ProjectItemProps {
	project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	project: { category, githubLink, cover, tags, demoLink, title }
}) => {
	return (
		<motion.div variants={cardVariant} initial="hidden" animate="visible" className={styles.project}>
			{/* <Rosa animation="flip-right"> */}
			<div className={styles.project__img__container}>
				<img src={cover.url} alt={title} className={styles.project__image} />
				<div className={styles.project__icon__container}>
					{demoLink && (
						<Link href={demoLink}>
							<svg className={styles.project__icon}>
								<use href="images/sprite.svg#icon-eye" />
							</svg>
						</Link>
					)}
					<Link href={githubLink}>
						<FaGithub className={styles.project__icon} />
					</Link>
				</div>
			</div>
			<h2 className={styles.project__title}>{title}</h2>
			<p className={styles.project__category}>{category.name}</p>
			<div className={styles.blog__tags__container}>
				{tags.slice(0, 3).map((tag) => {
					return <Tag tagName={tag.name} key={tag.id} />;
				})}
			</div>
			{/* </Rosa> */}
		</motion.div>
	);
};

export default ProjectItem;
