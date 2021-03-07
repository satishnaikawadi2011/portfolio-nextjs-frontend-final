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

const seoInfo = {
	description:
		`These are some of my web development and mobile app development projects which cover so many popular technologies such as ReactJS,NodeJS,ElectronJS,React Native,Flutter,Django,etc.`,
	image: `https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg`,
	url: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/projects`
};

const ProjectsPage = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<PageWrapper seoInfo={seoInfo} title="My Projects - Reflection of my skills and what I have learned">
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
	const res = await fetch('https://saty-api.herokuapp.com/projects?_sort=createdAt:DESC');
	const projects: Project[] = await res.json();
	return {
		props: { projects }
	};
};
