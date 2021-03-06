import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';
import { cardContainerVariant } from '../../utils/variants';
import ProjectItem from '../../components/project-item/ProjectItem';
import { Project } from '../../models/Project';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

interface Props {
	projects: Project[];
}
const ProjectsPage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<PageWrapper title="My Projects">
				<motion.div
					variants={cardContainerVariant}
					initial="hidden"
					animate="visible"
					className={`section__center projects__section`}
				>
					{projects.map((project) => {
						return <ProjectItem key={project.id} project={project} />;
					})}
				</motion.div>
			</PageWrapper>
		</div>
	);
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const res = await fetch('https://saty-api.herokuapp.com/projects');
	const projects: Project[] = await res.json();
	return {
		props: { projects }
	};
};
