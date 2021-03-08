import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import NotFoundIcon from '../components/not-found-icon/NotFoundIcon';
import PageWrapper from '../layout/pagewrapper/PageWrapper';
import { Post } from '../models/Post';
import styles from '../components/sections/blogs/blogs.module.css';
import BlogCard from '../components/blog-card/BlogCard';

interface Props {
	posts: Post[];
}

const Custom404 = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<React.Fragment>
			<PageWrapper title="Page Not found !" isLandingPage seoInfo={{}} style={{ textAlign: 'center' }}>
				<NotFoundIcon style={{ marginTop: '2rem' }} />
				<p style={{ marginTop: '3rem' }}>
					We couldn't find what you were looking for. May be you'll find something you like from the stuff
					below..✨
				</p>
				<div className={`section__center ${styles.blogs__section}`}>
					{posts.map((post: Post) => {
						return (
							<BlogCard key={post.id} post={post}>
								{post.description}
							</BlogCard>
						);
					})}
				</div>
			</PageWrapper>
		</React.Fragment>
	);
};

export default Custom404;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const res = await fetch('https://saty-api.herokuapp.com/posts?_sort=createdAt:DESC&_limit=3');
	const posts: Post[] = await res.json();
	return {
		props: { posts }
	};
};
