import { GetStaticProps } from 'next';
import Hero from '../components/hero/Hero';
import About from '../components/sections/about/About';
import Blogs from '../components/sections/blogs/Blogs';
import EducationSection from '../components/sections/education/Education';
import Projects from '../components/sections/projects/Projects';
import Services from '../components/sections/service/Services';
import Technologies from '../components/technologies/Technologies';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import { Education } from '../models/Education';
import { Experience } from '../models/Experience';
import { Post } from '../models/Post';
import { Project } from '../models/Project';
import { InferGetStaticPropsType } from 'next';
import React from 'react';

const seoInfo = {
	description:
		'Top Web Development blog articles,Top Web Development projects,Full Stack Development projects,App Development projects with Complete Source Code and more.',
	image: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/images/hero-3x.jpg`,
	url: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN
};
interface Props {
	posts: Post[];
	educationItems: Education[];
	experienceItems: Experience[];
	projects: Project[];
}

export default function Home({
	educationItems,
	posts,
	projects,
	experienceItems
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<PageWrapper
			title="Satish Naikawadi - Developer,College Student and Coding Enthusiast"
			seoInfo={seoInfo}
			isLandingPage={true}
		>
			<Hero path="/" />
			<About title />
			<EducationSection educationItems={educationItems} experienceItems={experienceItems} />
			<Services />
			<Projects projects={projects} />
			<Blogs posts={posts} />
			<Technologies />
		</PageWrapper>
	);
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const res = await fetch('https://saty-api.herokuapp.com/posts?_sort=createdAt:DESC&_limit=3');
	const posts: Post[] = await res.json();
	const res2 = await fetch('https://saty-api.herokuapp.com/educations?_sort=createdAt:DESC&_limit=3');
	const educationItems: Education[] = await res2.json();
	const res3 = await fetch('https://saty-api.herokuapp.com/experiences?_sort=createdAt:DESC&_limit=3');
	const experienceItems: Experience[] = await res3.json();
	const res4 = await fetch('https://saty-api.herokuapp.com/projects?_sort=createdAt:DESC&_limit=3');
	const projects: Project[] = await res4.json();
	return {
		props: { posts, educationItems, experienceItems, projects }
	};
};
