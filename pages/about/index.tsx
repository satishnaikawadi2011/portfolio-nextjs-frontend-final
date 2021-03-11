import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import Hero from '../../components/hero/Hero';
import About from '../../components/sections/about/About';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';

interface Props {
	postCount: number;
}

const seoInfo = {
	description:
		`I am Satish.I have been persuing my Computer Science degree from 2020.I love to learn new
		Technologies in dev world.I have written dev blog articles and have created plenty of Android, Web and Desktop Applications`,
	image: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/images/hero-3x.jpg`,
	url: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/about`
};

const AboutPage = ({ postCount }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<PageWrapper title="About Me - Get to know aboute me" seoInfo={seoInfo}>
			<Hero />
			<About postCount={postCount} />
		</PageWrapper>
	);
};

export default AboutPage;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const res = await fetch('https://saty-api.herokuapp.com/posts/count');
	const postCount: number = await res.json();
	return {
		props: { postCount }
	};
};
