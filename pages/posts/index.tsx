import React from 'react';
import styles from '../../components/sections/blogs/blogs.module.css';

import { motion } from 'framer-motion';
import PageWrapper from '../../layout/pagewrapper/PageWrapper';
import { cardContainerVariant } from '../../utils/variants';
import BlogCard from '../../components/blog-card/BlogCard';
import { Post } from '../../models/Post';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const seoInfo = {
	description:
		`This is my personal blog.Here I weekly post new articles realated to exciting,interesting and new technologies/frameworks in dev community.`,
	image: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/images/hero-3x.jpg`,
	url: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/posts`
};

interface Props {
	posts: Post[];
}

const BlogsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<PageWrapper title="Blog Articles - My writing about coding things which excites me">
				<motion.div variants={cardContainerVariant} initial="hidden" animate="visible">
					{
						<section className={`section__center ${styles.blogs__section}`}>
							{posts.map((post) => {
								return (
									<BlogCard post={post} key={post.id}>
										{post.description}
									</BlogCard>
								);
							})}
						</section>
					}
				</motion.div>
			</PageWrapper>
		</div>
	);
};

export default BlogsPage;

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const res = await fetch('https://saty-api.herokuapp.com/posts?_sort=createdAt:DESC');
	const posts: Post[] = await res.json();
	return {
		props: { posts }
	};
};
