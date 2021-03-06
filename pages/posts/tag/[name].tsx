import React from 'react';
import styles from '../../../components/sections/blogs/blogs.module.css';

import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import PageWrapper from '../../../layout/pagewrapper/PageWrapper';
import { Post } from '../../../models/Post';
import { cardContainerVariant } from '../../../utils/variants';
import BlogCard from '../../../components/blog-card/BlogCard';
import { Tag } from '../../../models/Tag';
import { ParsedUrlQuery } from 'node:querystring';
import { useRouter } from 'next/router';

interface Props {
	posts: Post[];
}

interface Params extends ParsedUrlQuery {
	name: string;
}
const BlogsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	const { name }: any = router.query;
	const seoInfo = {
		description:
			`This is my personal blog.These are some latest articles realated to exciting and interesting things of ${name}`,
		image: `https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg`,
		url: `${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/posts/tag/${name}`
	};
	return (
		<div>
			<PageWrapper seoInfo={seoInfo} title={`Blog Articles - My Articles related to ${name.toLowerCase()}`}>
				<motion.div variants={cardContainerVariant} initial="hidden" animate="visible">
					{
						<section className={`section__center ${styles.blogs__section}`}>
							<h3
								style={{
									textTransform: 'lowercase',
									width: '100%',
									textAlign: 'center',
									marginBottom: '2rem',
									color: 'var(--secondaryColor)'
								}}
							>
								#{name}
							</h3>
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

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://saty-api.herokuapp.com/tags');
	const tags: Tag[] = await res.json();

	const paths = tags.map((tag) => {
		return { params: { name: tag.name } };
	});

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const res = await fetch(`https://saty-api.herokuapp.com/posts?tags.name_in=${params.name}&_sort=published_at:DESC`);
	const posts: Post[] = await res.json();
	return {
		props: { posts }
	};
};
